import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useReducer } from "react";
import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  ListItemText,
} from "@material-ui/core";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useStore } from "../../context";
import { getError, useStyles } from "../../utils";
import { AdminCardGrid, AdminChart, Layout } from "../../components";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, summary: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

ChartJS.register(CategoryScale, LinearScale, BarElement);

function AdminOrders() {
  const { state } = useStore();
  const router = useRouter();
  const classes = useStyles();
  const { userInfo } = state;

  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: "",
  });

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/admin/summary`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <Grid container spacing={5}>
        <Grid item md={3} xs={12}>
          <Card className={classes.admin_select}>
            <List>
              <NextLink href="/admin/dashboard" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Admin Dashboard" />
                </ListItem>
              </NextLink>
              <NextLink href="/admin/orders" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Orders" />
                </ListItem>
              </NextLink>
              <NextLink href="/admin/products" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Products" />
                </ListItem>
              </NextLink>
              <NextLink href="/admin/users" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Users" />
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <List>
            <ListItem>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Typography className={classes.error}>{error}</Typography>
              ) : (
                <AdminCardGrid summary={summary} />
              )}
            </ListItem>
            <ListItem>
              <AdminChart summary={summary} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(AdminOrders), { ssr: false });
