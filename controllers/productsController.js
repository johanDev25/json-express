const productsCrtl = {};

const Products = require("../models/Products");

productsCrtl.getProducts= async (req,res)=> {
  const products = await Products.find({});
  res.setHeader('Content-Type', 'application/json');
  res.json(products)
}

module.exports = productsCrtl;
