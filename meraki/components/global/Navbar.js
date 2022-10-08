/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NextLink from "next/link";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";

export default function NavBar() {
  const classes = useStyles();
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
          <NextLink href="/cart" passHref>
            <a className={classes.nav_link}>
              <i className="fa-solid fa-cart-shopping" />
            </a>
          </NextLink>
          <NextLink href="/login" passHref>
            <a className={classes.nav_btn}>Login</a>
          </NextLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
