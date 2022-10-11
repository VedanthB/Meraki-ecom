import React from "react";
import { Grid, Card, List, ListItem, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";

function OrderSummary({ itemsPrice, taxPrice, shippingPrice, totalPrice }) {
  const classes = useStyles();
  return (
    <Card className={classes.order_detail_cards}>
      <List>
        <ListItem>
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
      </List>
    </Card>
  );
}

export default OrderSummary;
