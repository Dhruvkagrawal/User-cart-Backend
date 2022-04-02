const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    name:{type:String,required:true},
    product: { type: String, require: true },
    quantity: {type:String,required:true,min:1},
    price: {type:String,required:true,min:1},
  },
  {
    versionKey: false,
  }
);

module.exports = model("cart", cartSchema);
