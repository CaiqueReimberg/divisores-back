import { IDivisorCalculatorService } from "../../services/divisorCalculator/IDivisorCalculatorService";
import { IDivisorsAndPrimes } from "../../utils/interfaces/IDivisorsAndPrimes";

export class DivisorCalculatorUseCase {
  constructor(
    private divisorCalculatorService: IDivisorCalculatorService
  ) { }

  /**
  * @description Executar o método calculateAllDivisorsAndPrimes do serviço.
  *
  * @param {number} currentNumber
  * 
  * @return {IDivisorsAndPrimes} divisores e divisores primos em uma interface.
  **/
  execute(currentNumber: number): IDivisorsAndPrimes {
    return this.divisorCalculatorService.calculateAllDivisorsAndPrimes(currentNumber);
  }
}