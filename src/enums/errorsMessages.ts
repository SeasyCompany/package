export const errorsMessages = {
  "1000": [500, "Internal server error"],
  "1001": [500, "Error loading environment variables in token request"],
  "2001": [422, "The following parameter is mandatory and is invalid: product"],
  "3001": [503, "Error collecting token"]
}

export type IErrorNumber = '1000' | '1001' |'2001' |'3001' | 1000 | 1001 | 2001 | 3001