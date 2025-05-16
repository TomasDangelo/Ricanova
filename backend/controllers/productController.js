const Product = require('../models/Product');

const getAll = async (req, res) => {
  const { category, search } = req.query;
  let query = {};
  if (category) query.category = category;
  if (search) query.name = { $regex: search, $options: 'i' };
  const products = await Product.find(query);
  res.json(products);
};

const getOne = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Producto no encontrado' });
};

const create = async (req, res) => {
  try {
    const { name, price, description, category, image, stock } = req.body;

    if (!name || !price || !description || !category || !image) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const newProductData = { name, price, description, category, image };

    if (stock !== undefined) newProductData.stock = stock;

    const product = new Product(newProductData);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear producto' });
  }
};

const createMultiple = async (req, res) => {
  try {
    const productsData = req.body; 

    if (!Array.isArray(productsData)) {
      return res.status(400).json({ error: 'Se esperaba un array ' });
    }

    const createdProducts = [];
    for (const productData of productsData) {
      const { name, price, description, category, image, stock } = productData;

      if (!name || !price || !description || !category || !image) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios para cada producto' });
      }

      const newProductData = { name, price, description, category, image };
      if (stock !== undefined) newProductData.stock = stock;

      const product = new Product(newProductData);
      await product.save();
      createdProducts.push(product);
    }

    res.status(201).json(createdProducts);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear productos' });
  }
};


const update = async (req, res) => {
  try {
    const { name, price, description, category, image, stock } = req.body;
    if (!name || !price || !description || !category || !image) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const updatedProductData = { name, price, description, category, image };
    if (stock !== undefined) updatedProductData.stock = stock;
    const updated = await Product.findByIdAndUpdate(req.params.id, updatedProductData, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar producto' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar producto' });
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  delete: deleteProduct,
  createMultiple
};