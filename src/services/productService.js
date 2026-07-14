const products = require("../data/products");

const getAllProducts = () => {
    return products;
};

const createProduct = (product) => {

    if (!product.nombre || !product.precio) {
        throw new Error("El nombre y el precio son obligatorios.");
    }

    const newProduct = {
        id: products.length + 1,
        nombre: product.nombre,
        precio: product.precio
    };

    products.push(newProduct);

    return newProduct;
};

const deleteProduct = (id) => {

    const index = products.findIndex(product => product.id === Number(id));

    if (index === -1) {
        throw new Error("Producto no encontrado.");
    }

    const deletedProduct = products.splice(index, 1);

    return deletedProduct[0];
};

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct
};