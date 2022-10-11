import React from "react";
import { Card, List, ListItem, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";

function PaymentDetails({ paymentMethod, isPaid, paidAt }) {
  const classes = useStyles();
  return (
    <Card className={classes.order_detail_cards}>
      <List>
        <ListItem>
          <Typography className={classes.order_details_heading}>
            Payment Method: {paymentMethod}
          </Typography>
        </ListItem>

        <ListItem>
          Status: {isPaid ? `paid on ${paidAt.substring(0, 10)}` : "not paid"}
        </ListItem>
      </List>
    </Card>
  );
}

export default PaymentDetails;
