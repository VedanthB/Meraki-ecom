import React from "react";
import dynamic from "next/dynamic";
import { Layout, OrderDetailsPage } from "../../components";

function Order({ params }) {
  return (
    <Layout>
      <OrderDetailsPage params={params} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { params } };
}

export default dynamic(() => Promise.resolve(Order), { ssr: false });
