import React from "react";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../utils";

function ProductDetailsCard({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.product_details_page_card}>
      <List>
        <ListItem>
          <Grid container item xs={12}>
            <Typography>Price: Rs.{product.price}</Typography>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container item xs={6}>
            <Typography>
              Status: {product.countInStock > 0 ? "In stock" : "Unavailable"}
            </Typography>
          </Grid>
        </ListItem>
        <ListItem>
          <Button fullWidth variant="contained" color="primary">
            Add to cart
          </Button>
        </ListItem>
      </List>
    </Card>
  );
}

export default ProductDetailsCard;
