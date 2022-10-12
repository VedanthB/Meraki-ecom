/* eslint-disable prefer-template */
import nc from "next-connect";
import { Product } from "../../../../models";
import { db, isAdmin, isAuth } from "../../../../utils";

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

handler.post(async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: "name",
    slug: "slug-" + Math.random(),
    image: "/images/default-image.png",
    price: 0,
    category: "category",
    brand: "brand",
    countInStock: 0,
    description: "description",
    rating: 0,
    numReviews: 0,
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: "Product Created", product });
});

export default handler;
