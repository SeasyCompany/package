import { errorHandler } from '../../src/helpers/errorHandler'

describe('error lib', () => {
  it('should return formatted error', () => {
    try {
      throw errorHandler.generate(3001)
    } catch (error: any) {
      const parsedError = JSON.parse(error.message)
      const formattedError = errorHandler.format(error)
      expect(parsedError.areErrorHandled).toEqual(true)
      expect(formattedError.statusCode).toEqual(503)
      expect(formattedError.body).toEqual('{"message":"Error collecting token","stackTrace":""}')
    }
  })

  it('should format any error', () => {
    try {
      throw new Error('Unhandled error')
    } catch (error: any) {
      const formattedError = errorHandler.format(error)
      expect(error.message).toEqual('Unhandled error')
      expect(formattedError.statusCode).toEqual(500)
      expect(formattedError.body.includes('message')).toEqual(true)
      expect(formattedError.body.includes('stackTrace')).toEqual(true)
    }
  })
})
