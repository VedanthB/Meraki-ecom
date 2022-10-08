import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography>Meraki</Typography>
      </Toolbar>
    </AppBar>
  );
}
