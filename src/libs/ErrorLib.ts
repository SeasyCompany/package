import { errorsMessages, IErrorNumber } from '../enums/errorsMessages'

interface IBody {
  message: string
  stackTrace: string
}
interface IError {
  statusCode: number
  body: string
}

export const ErrorLib = {
  format_(exception: Error): IError {
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

  generate_(errorNumber: IErrorNumber): Error {
    let error = errorsMessages[errorNumber]
    const errorResponse = {
      statusCode: error[0],
      body: JSON.stringify({
        message: error[1],
        stackTrace: ''
      }),
      areErrorHandled: true
    }
    return new Error(JSON.stringify(errorResponse))
  }
}
