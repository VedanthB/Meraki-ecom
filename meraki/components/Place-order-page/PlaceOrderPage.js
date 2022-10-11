/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Grid, Typography, Card, List, ListItem } from "@material-ui/core";

import { useRouter } from "next/router";
import { useStore } from "../../context";

import CheckoutWizard from "../CheckoutWizard";
import { useStyles } from "../../utils";
import PlaceOrderTable from "./PlaceOrderTable";
import PlaceOrderSummary from "./PlaceOrderSummary";

function PlaceOrder() {
  const classes = useStyles();
  const router = useRouter();
  const { state } = useStore();
  const {
    cart: { cartItems, paymentMethod, shippingAddress },
  } = state;

  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, []);

  return (
    <div>
      <CheckoutWizard activeStep={2} />

      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
          <Card className={classes.place_order_cards}>
            <Typography className={classes.place_order_cards_text}>
              Shipping Address: {shippingAddress?.fullName},{" "}
              {shippingAddress?.address}, {shippingAddress?.city},{" "}
              {shippingAddress?.postalCode}, {shippingAddress?.country}
            </Typography>
          </Card>
          <Card className={classes.place_order_cards}>
            <Typography className={classes.place_order_cards_text}>
              Payment Method: {paymentMethod}
            </Typography>
          </Card>
          <Card className={classes.place_order_cards}>
            <List>
              <ListItem>
                <Typography className={classes.place_order_cards_text}>
                  Order Items
                </Typography>
              </ListItem>
              <ListItem>
                <PlaceOrderTable />
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <PlaceOrderSummary />
        </Grid>
      </Grid>
    </div>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
