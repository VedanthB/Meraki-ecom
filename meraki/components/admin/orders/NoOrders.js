/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useStore } from "../../../context";

function NoOrders() {
  const { state } = useStore();
  const { darkMode } = state;

  return (
    <div>
      <p style={{ fontSize: "1.5rem", textAlign: "center" }}>No orders</p>
      {darkMode ? (
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1665496409/Meraki-ecom/no-order-history-dark-mode_io793m.gif" />
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1665496323/Meraki-ecom/no-order-history-light-mode_onv1r7.gif" />
          </div>
        </div>
      )}
    </div>
  );
}

export default NoOrders;
