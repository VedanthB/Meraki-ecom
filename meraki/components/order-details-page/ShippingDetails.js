import React from "react";
import { Card, List, ListItem, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";

function ShippingDetails({ shippingAddress, isDelivered, deliveredAt }) {
  const classes = useStyles();

  return (
    <Card className={classes.order_detail_cards}>
      <List>
        <ListItem>
          <Typography className={classes.order_details_heading}>
            Shipping Address: {shippingAddress.fullName},{" "}
            {shippingAddress.address}, {shippingAddress.city},{" "}
            {shippingAddress.postalCode}, {shippingAddress.country}
          </Typography>
        </ListItem>
        <ListItem>
          Status:{" "}
          {isDelivered
            ? `delivered on ${deliveredAt.substring(0, 10)}`
            : "not delivered"}
        </ListItem>
      </List>
    </Card>
  );
}

export default ShippingDetails;
