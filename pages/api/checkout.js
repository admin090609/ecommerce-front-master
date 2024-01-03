import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from 'mongoose';
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  const { name, email, phone, cartProducts } = req.body;
  console.log('Received data:', req.body);

  console.log(name, email, phone, cartProducts);

  // Connect to MongoDB using Mongoose
  await mongooseConnect();

  // Extract productIds as strings
  const productIds = cartProducts.map(item => item.productId.productId);


  // Fetch product information based on product IDs
  const productsInfos = await Product.find({ _id: { $in: productIds } });


  // Build line items for the order
  let line_items = [];
  for (const cartProduct of cartProducts) {
    const productId = cartProduct.productId.productId;

    // Debug information
    console.log('productId:', productId);

    const productInfo = productsInfos.find(p => p._id.toString() === productId.toString());

    // Debug information
    console.log('productInfo:', productInfo);

    if (!productInfo) {
      console.error(`Product information not found for productId: ${productId}`);
    }

    line_items.push({
      quantity: cartProduct.productId.quantity,
      price_data: {
        currency: 'Lei',
        product_data: {
          name: cartProduct.productId.productDetails.title,
          images: cartProduct.productId.images,
          options: cartProduct.productId.options,
        },
      },
    });
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    phone,
  });

  // Redirect the user or respond with JSON
  res.json({
    order: orderDoc,
  });
}
