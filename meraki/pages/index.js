import { HomePage, Layout } from "../components";
import { Product } from "../models";
import { db } from "../utils";

export default function Home({ products }) {
  return (
    <div>
      <Layout>
        <HomePage products={products} />
      </Layout>
    </div>
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
