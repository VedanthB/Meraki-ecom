/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

function ProductDetailsCard({ product }) {
  const router = useRouter();
  const classes = useStyles();
  const { state, dispatch } = useStore();

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </Button>
        </ListItem>
      </List>
    </Card>
  );
}

export default ProductDetailsCard;
