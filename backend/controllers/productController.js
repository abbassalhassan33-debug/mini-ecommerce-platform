const productServices = require("../services/productService");

const getProducts = (req, res) => {
  const products = productServices.getAllProducts();

  res.status(200).json(products);
};

module.exports = {
  getProducts,
};
