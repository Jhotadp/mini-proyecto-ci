const productService = require("../src/services/productService");

describe("Pruebas Unitarias - Product Service", () => {

    test("Debe obtener todos los productos", () => {
        const products = productService.getAllProducts();
        expect(Array.isArray(products)).toBe(true);
    });

    test("Debe crear un producto correctamente", () => {
        const product = {
            nombre: "Tablet Samsung",
            precio: 1200000
        };

        const result = productService.createProduct(product);

        expect(result.nombre).toBe("Tablet Samsung");
        expect(result.precio).toBe(1200000);
    });

    test("Debe lanzar error si falta el nombre", () => {

        expect(() => {

            productService.createProduct({
                precio: 5000
            });

        }).toThrow();

    });

    test("Debe lanzar error si falta el precio", () => {

        expect(() => {

            productService.createProduct({
                nombre: "Monitor"
            });

        }).toThrow();

    });

    test("Debe eliminar un producto existente", () => {

        const nuevo = productService.createProduct({
            nombre: "Producto Temporal",
            precio: 100
        });

        const eliminado = productService.deleteProduct(nuevo.id);

        expect(eliminado.id).toBe(nuevo.id);

    });

    test("Debe lanzar error al eliminar un producto inexistente", () => {

        expect(() => {

            productService.deleteProduct(99999);

        }).toThrow();

    });

});