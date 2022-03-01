import { Request, Response } from "express";
import { DivisorCalculatorUseCase } from "./DivisorCalculatorUseCase";

export class DivisorCalculatorController {
  constructor(
    private divisorCalculatorUseCase: DivisorCalculatorUseCase
  ) { }
  
  /**
  * @description Receber o request, chamar o use case e retornar a response.
  *
  * @param {Request} request
  * @param {Response} response
  **/
  handle(request: Request, response: Response) {
    const { selectedNumber } = request.query;

    try {
      const divisorsAndPrimes = this.divisorCalculatorUseCase.execute(Number(selectedNumber));

      return response.status(200).json({
        divisorsAndPrimes
      });
    } catch (error) {
      console.error(error.message);

      response.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}
