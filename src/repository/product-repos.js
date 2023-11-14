const Product = require("../model/product-model");

const productRepository = {
  getAllProducts: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  },
  getProductByID: async (id) => {
    try {
      const product = await Product.findOne({ id: id });
      return product;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = productRepository;