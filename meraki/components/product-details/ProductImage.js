import React from "react";
import Image from "next/image";

function ProductDetailsImage({ product }) {
  return (
    <Image
      src={product.image}
      alt={product.name}
      width={850}
      height={900}
      layout="responsive"
    />
  );
}

export default ProductDetailsImage;
