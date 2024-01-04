import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../models/Product";
import { Category } from "../../../models/Category";
import { mongooseConnect } from "../../../lib/mongoose";

const cadouri = ({ products }) => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-3xl mb-8">Suvenire și cadouri corporative</h1>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <Link href={`/product/${product._id}`}>
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                />
                <p>{product.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default cadouri;

export async function getServerSideProps() {
  await mongooseConnect();

  // Find the category with the name "Pixuri Eco"
  const cadouriCategory = await Category.findOne({ name: "Suvenire și cadouri corporative" });

  // If the category is found, fetch products with that category
  const products = cadouriCategory
    ? await Product.find({ category: cadouriCategory._id }, null, { sort: { '_id': -1 } })
    : [];

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
