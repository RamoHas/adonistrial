import type { HttpContext } from "@adonisjs/core/http";
import QuotesService from "#services/quote_service";

const quoteService = new QuotesService()

export default class QuotesController {
    public async quoteOfTheDay({ response }: HttpContext) {
      const quote = quoteService.getRandomQuote()
      return response.ok(quote)
    }
  
    public async getQuoteById({ params, response }: HttpContext) {
      const quote = quoteService.getQuoteById(Number(params.id))
  
      if (!quote) {
        return response.notFound({ message: 'Quote not found' })
      }
  
      return response.ok(quote)
    }
}