/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

import {
  Grid,
  Card,
  List,
  ListItem,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

function OrderSummary({
  order,
  isPending,
  createOrder,
  onApprove,
  onError,
  loadingDeliver,
  deliverOrderHandler,
}) {
  const classes = useStyles();
  const { state } = useStore();
  const { userInfo } = state;

  const { isPaid, itemsPrice, taxPrice, shippingPrice, totalPrice } = order;

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
              !userInfo?.isAdmin && (
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

        {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
          <ListItem className={classes.deliver_btn_container}>
            {loadingDeliver ? (
              <CircularProgress />
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={deliverOrderHandler}
              >
                Deliver Order
              </Button>
            )}
          </ListItem>
        )}
      </List>
    </Card>
  );
}

export default OrderSummary;
