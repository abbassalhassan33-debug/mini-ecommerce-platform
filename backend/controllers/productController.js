const productServices = require("../services/productService");

const getProducts = (req, res) => {
  const products = productServices.getAllProducts();
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = productServices.getProductById(id);
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
};
