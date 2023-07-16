const { Router } = require("express");

const {
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/users.ctrl");

const router = Router();

router.get("/", obtenerProducto);
router.post("/", crearProducto);
router.put("/:id", actualizarProducto);
router.delete("/:id", eliminarProducto);

module.exports = router;
