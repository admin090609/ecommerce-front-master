import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../models/Product";
import { Category } from "../../../models/Category";
import { mongooseConnect } from "../../../lib/mongoose";

const people_stand = ({ products }) => {
    return (
        <div className=" flex flex-col items-center">
            <h1 className="text-3xl mb-8">People stopper (A-Stand)</h1>
            <ul className="flex items-center gap-4 flex-wrap justify-center">

                {products.map((product) => (
                    <li key={product._id}>
                        <Link href={`/product/${product._id}`}>
                            <div className="h-40 md:w-60 w-40 flex items-center justify-center border-2 border-[#ccc] rounded-md overflow-hidden">

                                <img
                                    src={product.images?.[0]}
                                    alt={product.title}
                                    className="object-contain w-full h-full"

                                />
                            </div>

                            <p>{product.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default people_stand;

export async function getServerSideProps() {
    await mongooseConnect();

    // Find the category with the name "Pixuri Eco"
    const people_standCategory = await Category.findOne({ name: "People stopper (A-Stand)" });

    // If the category is found, fetch products with that category
    const products = people_standCategory
        ? await Product.find({ category: people_standCategory._id }, null, { sort: { '_id': -1 } })
        : [];

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        },
    };
}
