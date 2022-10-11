import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {
  Grid,
  Button,
  Card,
  List,
  ListItem,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";
import { getError, useStyles } from "../../utils";
import { useStore } from "../../context";

function PlaceOrderSummary() {
  const classes = useStyles();
  const { state, dispatch } = useStore();

  const {
    userInfo,
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state;

  const router = useRouter();

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0),
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.1);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    closeSnackbar();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cartItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        },
      );
      dispatch({ type: "CART_CLEAR" });

      Cookies.remove("cartItems");

      setLoading(false);

      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={placeOrderHandler}
          >
            Place Order
          </Button>
        </ListItem>
        {loading && (
          <ListItem>
            <CircularProgress />
          </ListItem>
        )}
      </List>
    </Card>
  );
}

export default PlaceOrderSummary;
