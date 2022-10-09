/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextLink from "next/link";
import { Typography } from "@material-ui/core";
import { useStore } from "../../context";

function EmptyCart() {
  const { state } = useStore();
  const { darkMode } = state;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <NextLink href="/">
          <Typography variant="h1">Cart is empty. Go shopping!</Typography>
        </NextLink>
      </div>

      {darkMode ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1665324512/Meraki-ecom/cart-page-dark-mode2_gjor5q.gif" />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1665324652/Meraki-ecom/cart-page-light-mode_vo6m2f.gif" />
        </div>
      )}
    </div>
  );
}

export default EmptyCart;
