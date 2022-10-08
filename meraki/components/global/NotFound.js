/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useStyles } from "../../utils";

function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.not_found_container}>
      <img src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1665228827/random%20assets/404_Error_2_i9jdlt.gif" />
    </div>
  );
}

export default NotFound;
