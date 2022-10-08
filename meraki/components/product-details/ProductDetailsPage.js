/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import NextLink from "next/link";
import { useStyles } from "../../utils";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductDetailsCard from "./ProductDetailsCard";

function ProductDetailsPage({ product }) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <NextLink href="/" passHref>
          <Link>
            <Typography className={classes.product_details_page_back_btn}>
              back to products
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <ProductImage product={product} />
        </Grid>
        <Grid item md={6} xs={12}>
          <ProductDetails product={product} />

          <ProductDetailsCard product={product} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetailsPage;
