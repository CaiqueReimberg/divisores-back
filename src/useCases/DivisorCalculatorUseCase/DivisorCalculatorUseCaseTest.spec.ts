// Definindo classe que será "mockada"
jest.mock("../../services/divisorCalculator/DivisorCalculatorService");

import { DivisorCalculatorService } from "../../services/divisorCalculator/DivisorCalculatorService";
import { IDivisorCalculatorService } from "../../services/divisorCalculator/IDivisorCalculatorService";
import { IDivisorsAndPrimes } from "../../utils/interfaces/IDivisorsAndPrimes";
import { DivisorCalculatorUseCase } from "./DivisorCalculatorUseCase";

let useCase: DivisorCalculatorUseCase = null
let serviceDivisorCalculatorMock: IDivisorCalculatorService = null;

beforeAll(() => {
  serviceDivisorCalculatorMock =  new DivisorCalculatorService();
  useCase = new DivisorCalculatorUseCase(serviceDivisorCalculatorMock)
});

describe('Testing UseCase', () => {
  test('Execute function call calculateAllDivisorsAndPrimes', () => {
    useCase.execute(45);

    expect(serviceDivisorCalculatorMock.calculateAllDivisorsAndPrimes).toBeCalled();
  });

  test('Execute validate returns', () => {
    const expectedReturn: IDivisorsAndPrimes = {
      divisors: [1, 3, 5, 9, 15, 45],
      primes: [1, 3, 5]
    };

    jest.spyOn(serviceDivisorCalculatorMock, 'calculateAllDivisorsAndPrimes').mockImplementation(() => expectedReturn);

    const returnData = useCase.execute(45);

    expect(serviceDivisorCalculatorMock.calculateAllDivisorsAndPrimes).toBeCalled();
    expect(returnData).toStrictEqual(expectedReturn);
  });
})
