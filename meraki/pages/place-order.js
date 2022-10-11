import React from "react";
import dynamic from "next/dynamic";

import { Layout, PlaceOrderPage } from "../components";

function PlaceOrder() {
  return (
    <Layout title="Shopping Cart">
      <PlaceOrderPage />
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
