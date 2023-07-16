const Product = require("../models/product");

const obtenerProductos = async (req, res) => {
  try {
    const products= await Product.find();

    return res.json({
      ok: true,
      msg: "Productos obtenidos",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const crearProducto = async (req, res) => {
  try {
    const {product_name, quantity, cost, description, status } = req.body;

    const nuevo_producto = {
      product_name,
      quantity,
      cost,
      description,
      status,
    };

    const new_product = await Product(nuevo_producto).save();

    return res.json({
      ok: true,
      msg: "Producto agregado",
      data: new_product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, quantity, cost, description, status  } = req.body;

    const informacion_nueva = {
      product_name,
      quantity,
      cost,
      description,
      status,
    };

    const producto_actualizado = await Product.findByIdAndUpdate(
      id,
      informacion_nueva,
      { new: true }
    );

    return res.json({
      ok: true,
      msg: "Informacion actualizada",
      data: producto_actualizado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto_eliminado = await Product.findByIdAndRemove(id);

    return res.json({
      ok: true,
      msg: "Producto eliminado!",
      data: producto_eliminado,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

module.exports = {
crearProducto,
crearProducto,
actualizarProducto,
eliminarProducto,
};
