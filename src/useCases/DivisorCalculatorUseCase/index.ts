import { DivisorCalculatorController } from "./DivisorCalculatorController";
import { DivisorCalculatorService } from "../../services/divisorCalculator/DivisorCalculatorService";
import { DivisorCalculatorUseCase } from "./DivisorCalculatorUseCase";

// Injeção de dependencia nos objetos para exportar o controller funcional.
const divisorCalculatorService = new DivisorCalculatorService();
const divisorCalculatorUseCase = new DivisorCalculatorUseCase(divisorCalculatorService);
const divisorCalculatorController = new DivisorCalculatorController(divisorCalculatorUseCase);

export { divisorCalculatorController };
