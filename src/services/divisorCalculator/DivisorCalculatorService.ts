import { IDivisorsAndPrimes } from "../../utils/interfaces/IDivisorsAndPrimes";
import { IDivisorCalculatorService } from "./IDivisorCalculatorService";

export class DivisorCalculatorService implements IDivisorCalculatorService {
  /**
  * @description Valida se o número é primo.
  *
  * @param {number} currentNumber
  * 
  * @return {boolean} verdadeiro se um número for primo, falso caso contrário.
  **/
  private isNumberPrime(currentNumber: number): boolean {
    let allDivisors = 0;
    let auxiliarDivisor = currentNumber;
    
    while (auxiliarDivisor > 0) {
      if (currentNumber % auxiliarDivisor === 0) {
        allDivisors += 1;
      }

      auxiliarDivisor -= 1;
    }

    return allDivisors === 2 || currentNumber === 1;
  }

  /**
  * @description Calcula todos divisores e divisores primos de um número.
  *
  * @param {number} currentNumber
  * 
  * @return {IDivisorsAndPrimes} divisores e divisores primos em uma interface.
  **/
  calculateAllDivisorsAndPrimes(currentNumber: number): IDivisorsAndPrimes {
    let auxiliarDivisor = 1;
    const divisorsAndPrimes: IDivisorsAndPrimes = {
      divisors: [],
      primes: []
    };

    while(auxiliarDivisor <= currentNumber) {
      if (currentNumber % auxiliarDivisor === 0) {
        divisorsAndPrimes.divisors.push(auxiliarDivisor);

        if (this.isNumberPrime(auxiliarDivisor)) {
          divisorsAndPrimes.primes.push(auxiliarDivisor);
        }
      }

      auxiliarDivisor += 1;
    }

    return divisorsAndPrimes;
  }
  
}
