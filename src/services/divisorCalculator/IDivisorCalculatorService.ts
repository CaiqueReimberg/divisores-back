import { IDivisorsAndPrimes } from "../../utils/interfaces/IDivisorsAndPrimes";

export interface IDivisorCalculatorService {
  calculateAllDivisorsAndPrimes(currentNumber: number): IDivisorsAndPrimes
}
