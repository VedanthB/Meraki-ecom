/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import React, { useReducer } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSnackbar } from "notistack";
import axios from "axios";
import {
  Grid,
  Card,
  List,
  ListItem,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { getError, useStyles } from "../../utils";

function reducer(state, action) {
  switch (action.type) {
    case "PAY_REQUEST":
      return { ...state, loadingPay: true };
    case "PAY_SUCCESS":
      return { ...state, loadingPay: false, successPay: true };
    case "PAY_FAIL":
      return { ...state, loadingPay: false, errorPay: action.payload };
    case "PAY_RESET":
      return { ...state, loadingPay: false, successPay: false, errorPay: "" };
    default:
      return state;
  }
}

function OrderSummary({
  itemsPrice,
  taxPrice,
  shippingPrice,
  totalPrice,
  userInfo,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [{ isPending }] = usePayPalScriptReducer();
  const [{ order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  const { isPaid } = order;

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          },
        );
        dispatch({ type: "PAY_SUCCESS", payload: data });
        enqueueSnackbar("Order is paid", { variant: "success" });
      } catch (err) {
        dispatch({ type: "PAY_FAIL", payload: getError(err) });
        enqueueSnackbar(getError(err), { variant: "error" });
      }
    });
  }

  function onError(err) {
    enqueueSnackbar(getError(err), { variant: "error" });
  }
  const classes = useStyles();
  return (
    <Card className={classes.order_detail_cards}>
      <List>
        <ListItem className={classes.order_details_heading_container}>
          <Typography className={classes.order_details_heading}>
            Order Summary
          </Typography>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Items:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">Rs.{itemsPrice}</Typography>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Tax:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">Rs.{taxPrice}</Typography>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Shipping:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">Rs.{shippingPrice}</Typography>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item xs={6}>
              <Typography>
                <strong>Total:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">
                <strong>Rs.{totalPrice}</strong>
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {!isPaid && (
          <ListItem className={classes.paypal_button_container}>
            {isPending ? (
              <CircularProgress />
            ) : (
              !userInfo.isAdmin && (
                <div className={classes.fullWidth}>
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  />
                </div>
              )
            )}
          </ListItem>
        )}
      </List>
    </Card>
  );
}

export default OrderSummary;
