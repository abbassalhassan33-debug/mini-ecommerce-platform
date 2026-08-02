const products = [
  {
    id: 1,
    name: "iphone 16",
    price: 1200,
  },

  {
    id: 2,
    name: "samsung A16",
    price: 1000,
  },

  {
    id: 3,
    name: "Motorola 16 pro",
    price: 2000,
  },

  {
    id: 4,
    name: "Xiome 16",
    price: 200,
  },
];

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

module.exports = {
  getAllProducts,
  getProductById,
};
