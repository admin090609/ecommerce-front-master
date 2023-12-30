import mongoose, { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
  _id: Object,
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
  category: { type: Object },
  properties: { type: Object },
  options: [{ title: String, options: [String] }],
  minWidth: { type: Number, required: true },
  minHeight: { type: Number, required: true }
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);