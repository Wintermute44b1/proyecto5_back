const { Router } = require("express");

const {
  ObtenerProductos,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/product.ctrl");

const router = Router();

router.get("/", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;
