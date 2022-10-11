/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useStore } from "../../context";

function NoOrderHistory() {
  const { state } = useStore();
  const { darkMode } = state;

  return (
    <div>
      <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
        No order history
      </p>
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

export default NoOrderHistory;
