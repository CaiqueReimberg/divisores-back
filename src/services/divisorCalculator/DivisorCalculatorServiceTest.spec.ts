import { IDivisorsAndPrimes } from "../../utils/interfaces/IDivisorsAndPrimes";
import { DivisorCalculatorService } from "./DivisorCalculatorService";
import { IDivisorCalculatorService } from "./IDivisorCalculatorService";

let divisorCalculatorService: IDivisorCalculatorService = null;

beforeAll(() => {
  divisorCalculatorService = new DivisorCalculatorService();
});

describe('Testing CalculateAllDivisorsAndPrimes', () => {
  test('Success scenario with 45 number', () => {
    const expectedReturn: IDivisorsAndPrimes = {
      divisors: [1, 3, 5, 9, 15, 45],
      primes: [1, 3, 5]
    };

    const returnData = divisorCalculatorService.calculateAllDivisorsAndPrimes(45);

    expect(returnData).toStrictEqual(expectedReturn);
  });

  test('Success scenario with 1 number', () => {
    const expectedReturn: IDivisorsAndPrimes = {
      divisors: [1],
      primes: [1]
    };

    const returnData = divisorCalculatorService.calculateAllDivisorsAndPrimes(1);

    expect(returnData).toStrictEqual(expectedReturn);
  });
});
