import React from "react";
import { List, ListItem, Typography } from "@material-ui/core";

function ProductDetails({ product }) {
  return (
    <List>
      <ListItem>
        <Typography component="h1">{product.name}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Category: {product.category}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Brand: {product.brand}</Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Rating: {product.rating} stars ({product.numReviews} reviews)
        </Typography>
      </ListItem>
      <ListItem>
        <Typography> Description: {product.description}</Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
