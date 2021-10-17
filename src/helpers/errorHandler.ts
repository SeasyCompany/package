import { errorsMessages, IErrorNumber } from '../enums/errorsMessages'

interface IBody {
  message: string
  stackTrace: string
}
interface IError {
  statusCode: number
  body: string
}

export const errorHandler = {
  format (exception: Error): IError {
    const areErrorHandled = exception.message.includes('areErrorHandled')
    if (areErrorHandled) {
      const error = JSON.parse(exception.message)
      return { statusCode: error.statusCode, body: error.body }
    }

    const internalServerError = errorsMessages[1000]
    const statusCode = internalServerError[0] as number
    const message = internalServerError[1] as string
    const body: IBody = {
      message,
      stackTrace: exception?.stack || ''
    }
    return {
      statusCode,
      body: JSON.stringify(body)
    }
  },

  generate (errorNumber: IErrorNumber, exception?: Error): Error {
    const error = errorsMessages[errorNumber]
    const statusCode = error[0] as number
    const message = error[1] as string
    const body: IBody = {
      message,
      stackTrace: exception?.stack || ''
    }
    const errorResponse = {
      statusCode,
      body: JSON.stringify(body),
      areErrorHandled: true
    }
    return new Error(JSON.stringify(errorResponse))
  }
}
