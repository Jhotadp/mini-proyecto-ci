const request = require("supertest");
const app = require("../src/app");

describe("Pruebas de Integración - API Productos", () => {

    test("GET /products debe responder con 200", async () => {

        const response = await request(app).get("/products");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

    });

    test("POST /products debe crear un producto", async () => {

        const response = await request(app)
            .post("/products")
            .send({
                nombre: "Producto Test",
                precio: 50000
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.nombre).toBe("Producto Test");

    });

    test("POST /products debe responder 400 si falta el nombre", async () => {

        const response = await request(app)
            .post("/products")
            .send({
                precio: 10000
            });

        expect(response.statusCode).toBe(400);

    });

    test("DELETE /products/:id debe eliminar un producto", async () => {

        const nuevo = await request(app)
            .post("/products")
            .send({
                nombre: "Eliminar",
                precio: 5000
            });

        const response = await request(app)
            .delete(`/products/${nuevo.body.id}`);

        expect(response.statusCode).toBe(200);

    });

    test("DELETE /products/:id inexistente responde 404", async () => {

        const response = await request(app)
            .delete("/products/99999");

        expect(response.statusCode).toBe(404);

    });

});