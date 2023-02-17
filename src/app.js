import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

app.listen(8080, () => {
  console.log("Servidor http escuchando en el puerto 8080");
});
