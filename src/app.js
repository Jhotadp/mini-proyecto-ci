const express = require("express");
const productRoutes = require("./routes/productRoutes");

// Crear la aplicación
const app = express();

// Permitir recibir datos en formato JSON
app.use(express.json());

// Registrar las rutas de productos
app.use("/products", productRoutes);

// Ruta principal   
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de Productos",
        version: "1.0.0"
    });
});

// Exportar la aplicación
module.exports = app;