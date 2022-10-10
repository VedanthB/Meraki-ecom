import React from "react";
import { useRouter } from "next/router";
import { useStore } from "../context";
import { Layout, ShippingPage } from "../components";

export default function Shipping() {
  const router = useRouter();
  const { state } = useStore();
  const { userInfo } = state;
  if (!userInfo) {
    router.push("/login?redirect=/shipping");
  }

  return (
    <Layout>
      <ShippingPage />
    </Layout>
  );
}
