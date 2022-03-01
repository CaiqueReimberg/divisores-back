import express from "express";
import { router } from "./routes";

// Configuração do express
const app = express();

app.use(express.json());
app.use(router);

export { app };
