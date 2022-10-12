import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  ListItemText,
} from "@material-ui/core";
import { useStore } from "../context";
import { getError, useStyles } from "../utils";
import { Layout, UserProfileForm } from "../components";

function Profile() {
  const { state, dispatch } = useStore();
  const { setValue } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const classes = useStyles();
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    }
    setValue("name", userInfo.name);
    setValue("email", userInfo.email);
  }, []);
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar();
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: "error" });
      return;
    }
    try {
      const { data } = await axios.put(
        "/api/users/profile",
        {
          name,
          email,
          password,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } },
      );
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", data);
      enqueueSnackbar("Profile updated successfully", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };
  return (
    <Layout title="Profile">
      <Grid container spacing={5}>
        <Grid item md={3} xs={12}>
          <Card className={classes.user_select}>
            <List>
              <NextLink href="/profile" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="User Profile" />
                </ListItem>
              </NextLink>
              <NextLink href="/order-history" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Order History" />
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <List>
            <ListItem className={classes.user_profile_heading_container}>
              <Typography className={classes.user_profile_heading}>
                User Profile
              </Typography>
            </ListItem>

            <ListItem>
              <UserProfileForm submitHandler={submitHandler} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
