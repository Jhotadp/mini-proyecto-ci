const productService = require("../services/productService");

const getProducts = (req, res) => {
    const products = productService.getAllProducts();

    res.status(200).json(products);
};

const createProduct = (req, res) => {

    try {

        const newProduct = productService.createProduct(req.body);

        res.status(201).json(newProduct);

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

};

const deleteProduct = (req, res) => {

    try {

        const deletedProduct = productService.deleteProduct(req.params.id);

        res.status(200).json({
            mensaje: "Producto eliminado correctamente.",
            producto: deletedProduct
        });

    } catch (error) {

        res.status(404).json({
            error: error.message
        });

    }

};

module.exports = {
    getProducts,
    createProduct,
    deleteProduct
};