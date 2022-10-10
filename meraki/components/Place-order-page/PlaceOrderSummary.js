import React from "react";
import {
  Grid,
  Button,
  Card,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

function PlaceOrderSummary() {
  const classes = useStyles();
  const { state } = useStore();
  const {
    cart: { cartItems },
  } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0),
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.1);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return (
    <Card className={classes.place_order_cards}>
      <List>
        <ListItem>
          <Typography className={classes.place_order_cards_text}>
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
        <ListItem>
          <Button variant="contained" color="primary" fullWidth>
            Place Order
          </Button>
        </ListItem>
      </List>
    </Card>
  );
}

export default PlaceOrderSummary;
