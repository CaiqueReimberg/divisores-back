import { Router } from "express";
import { divisorCalculatorController } from "./useCases/DivisorCalculatorUseCase";

// Configuração das rotas do serviço com respectivos controllers
const router = Router();

router.get('/divisores', (request, response) => {
  divisorCalculatorController.handle(request, response);
});

export { router };
