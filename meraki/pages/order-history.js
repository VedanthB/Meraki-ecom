/* eslint-disable no-nested-ternary */
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useReducer } from "react";
import { Grid, List, ListItem, Card, ListItemText } from "@material-ui/core";
import { getError, useStyles } from "../utils";
import { useStore } from "../context";
import { Layout, NoOrderHistory, OrderHistoryTable } from "../components";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, orders: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function OrderHistory() {
  const { state } = useStore();
  const router = useRouter();
  const classes = useStyles();
  const { userInfo } = state;

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: "",
  });

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const fetchOrders = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/history`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);
  return (
    <Layout title="Order History">
      <Grid container spacing={5}>
        <Grid item md={3} xs={12}>
          <Card className={classes.user_select}>
            <List>
              <NextLink href="/profile" passHref>
                <ListItem button component="a">
                  <ListItemText primary="User Profile" />
                </ListItem>
              </NextLink>
              <NextLink href="/order-history" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Order History" />
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          {orders.length === 0 ? (
            <NoOrderHistory />
          ) : (
            <OrderHistoryTable
              loading={loading}
              error={error}
              orders={orders}
            />
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(OrderHistory), { ssr: false });
