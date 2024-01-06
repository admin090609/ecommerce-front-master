import React from "react";
import Link from "next/link";
import { Product } from "../../../../models/Product";
import { Category } from "../../../../models/Category";
import { mongooseConnect } from "../../../../lib/mongoose";

const plicuri = ({ products }) => {
    return (
        <div className=" flex flex-col items-center">
            <h1 className="text-3xl mb-8">Plicuri personalizate</h1>
            <ul className="flex items-center gap-4">

                    {products.map((product) => (
                        <li key={product._id}>
                            <Link href={`/product/${product._id}`}>
                            <div className="h-40 w-60 flex items-center justify-center border-2 border-[#ccc] rounded-md overflow-hidden">

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

export default plicuri;

export async function getServerSideProps() {
    await mongooseConnect();

    // Find the category with the name "Pixuri Eco"
    const plicuriCategory = await Category.findOne({ name: "Plicuri personalizate" });

    // If the category is found, fetch products with that category
    const products = plicuriCategory
        ? await Product.find({ category: plicuriCategory._id }, null, { sort: { '_id': -1 } })
        : [];

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        },
    };
}