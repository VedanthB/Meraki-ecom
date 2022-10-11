/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Grid,
  CircularProgress,
  Card,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { getError, useStyles } from "../../utils";
import CheckoutWizard from "../CheckoutWizard";
import { useStore } from "../../context";
import OrderDetailsTable from "./OrderDetailsTable";
import OrderSummary from "./OrderSummary";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, order: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function OrderDetailsPage({ params }) {
  const orderId = params?.id;
  const classes = useStyles();
  const router = useRouter();
  const { state } = useStore();
  const { userInfo } = state;

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    }
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order]);

  return (
    <div>
      <CheckoutWizard activeStep={3} />
      <Typography className={classes.order_id}>Order: {orderId}</Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography className={classes.error}>{error}</Typography>
      ) : (
        <Grid container spacing={3}>
          <Grid item md={9} xs={12}>
            <ShippingDetails
              shippingAddress={shippingAddress}
              isDelivered={isDelivered}
              deliveredAt={deliveredAt}
            />
            <PaymentDetails
              paymentMethod={paymentMethod}
              isPaid={isPaid}
              paidAt={paidAt}
            />
            <Card className={classes.order_detail_cards}>
              <List>
                <ListItem>
                  <Typography className={classes.order_details_heading}>
                    Order Items
                  </Typography>
                </ListItem>
                <ListItem>
                  <OrderDetailsTable orderItems={orderItems} />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <OrderSummary
              itemsPrice={itemsPrice}
              taxPrice={taxPrice}
              shippingPrice={shippingPrice}
              totalPrice={totalPrice}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default OrderDetailsPage;
