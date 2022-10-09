/* eslint-disable no-alert */
import NextLink from "next/link";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useStyles } from "../utils";
import { useStore } from "../context";

export default function HomePage({ products }) {
  const classes = useStyles();
  const { dispatch } = useStore();

  const addToCartHandler = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock <= 0) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item md={3} key={product.name}>
            <Card className={classes.home_page_card}>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                    className={classes.home_page_card_img}
                  />
                  <CardContent className={classes.home_page__card_details}>
                    <Typography>{product.name}</Typography>
                    <Typography>{product.brand}</Typography>
                    <Typography>Rs.{product.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions className={classes.home_page_btn_container}>
                <Button
                  size="small"
                  color="primary"
                  className={classes.home_page_card_btn}
                  onClick={() => addToCartHandler(product)}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
