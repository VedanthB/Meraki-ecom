/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from "next/link";
import { Grid, Typography } from "@material-ui/core";
import dynamic from "next/dynamic";
import { useStore } from "../context";
import {
  CartDetailsCard,
  CartItemsTable,
  EmptyCart,
  Layout,
} from "../components";

function CartScreen() {
  const { state } = useStore();

  const {
    cart: { cartItems },
  } = state;

  return (
    <Layout title="Shopping Cart">
      <div>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            <Typography component="h1" variant="h1">
              Shopping Cart
            </Typography>
            <Grid container spacing={4}>
              <Grid item md={9} xs={12}>
                <CartItemsTable cartItems={cartItems} />
              </Grid>
              <Grid item md={3} xs={12}>
                <CartDetailsCard cartItems={cartItems} />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
