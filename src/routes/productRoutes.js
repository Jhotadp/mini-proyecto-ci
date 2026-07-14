const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Obtener todos los productos
router.get("/", productController.getProducts);

// Crear un nuevo producto
router.post("/", productController.createProduct);

// Eliminar un producto por ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;