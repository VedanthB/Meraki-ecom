import React from "react";
import { useRouter } from "next/router";
import { Layout, NotFound, ProductDetailsPage } from "../../components";
import { db } from "../../utils";
import { Product } from "../../models";

export default function ProductScreen({ products }) {
  const router = useRouter();

  const { slug } = router.query;

  const product = products?.find((a) => a.slug === slug);

  if (!product) {
    return <NotFound />;
  }
  return (
    <Layout>
      <ProductDetailsPage product={product} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();

  const products = await Product.find({}).lean();

  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
