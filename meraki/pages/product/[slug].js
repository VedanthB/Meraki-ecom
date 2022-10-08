import React from "react";
import { useRouter } from "next/router";
import { Layout, NotFound, ProductDetailsPage } from "../../components";
import { data } from "../../utils";

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <NotFound />;
  }
  return (
    <Layout>
      <ProductDetailsPage product={product} />
    </Layout>
  );
}
