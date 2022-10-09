/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NextLink from "next/link";
import Cookies from "js-cookie";
import { AppBar, Toolbar, Typography, Switch, Badge } from "@material-ui/core";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

export default function NavBar() {
  const classes = useStyles();

  const { state, dispatch } = useStore();
  const { darkMode, cart } = state;

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <NextLink href="/" passHref>
          <a>
            <Typography className={classes.brand}>Meraki</Typography>
          </a>
        </NextLink>
        <div className={classes.grow} />
        <div className={classes.nav_link_container}>
          <Switch checked={darkMode} onChange={darkModeChangeHandler} />
          <NextLink href="/cart" passHref>
            {cart.cartItems.length > 0 ? (
              <Badge color="secondary" badgeContent={cart.cartItems.length}>
                <a className={classes.nav_link}>
                  <i className="fa-solid fa-cart-shopping" />
                </a>
              </Badge>
            ) : (
              <a className={classes.nav_link}>
                <i className="fa-solid fa-cart-shopping" />
              </a>
            )}
          </NextLink>
          <NextLink href="/login" passHref>
            <a className={classes.nav_btn}>Login</a>
          </NextLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
