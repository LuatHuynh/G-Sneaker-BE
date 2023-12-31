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
  lastedProduct: async () => {
    try {
      const product = await Product.findOne().sort({ id: -1 });
      return product;
    } catch (error) {
      throw error;
    }
  },
  createProduct: async (product) => {
    try {
      const latestProduct = await Product.findOne().sort({ id: -1 });
      const newId = Math.floor(latestProduct.id) + 1;
      const newProduct = {
        ...product,
        id: newId,
      };
      const createdProduct = await Product.create(newProduct);
      return createdProduct;
    } catch (error) {
      throw error;
    }
  },
  updateProduct: async (product, id) => {
    try {
      await Product.updateOne({ id: id }, product);
    } catch (error) {
      throw error;
    }
  },
  deleteProductByID: async (id) => {
    try {
      await Product.deleteOne({ id: id });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = productRepository;
