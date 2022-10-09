/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from "next/link";
import { Grid, Typography } from "@material-ui/core";
import { useStore } from "../context";
import { CartDetailsCard, CartItemsTable, Layout } from "../components";

export default function CartScreen() {
  const { state } = useStore();

  const {
    cart: { cartItems },
  } = state;

  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      <div>
        {cartItems.length === 0 ? (
          <div>
            Cart is empty. <NextLink href="/">Go shopping</NextLink>
          </div>
        ) : (
          <Grid container spacing={4}>
            <Grid item md={9} xs={12}>
              <CartItemsTable cartItems={cartItems} />
            </Grid>
            <Grid md={3} xs={12}>
              <CartDetailsCard cartItems={cartItems} />
            </Grid>
          </Grid>
        )}
      </div>
    </Layout>
  );
}
