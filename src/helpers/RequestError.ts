class RequestError extends Error {
  statusCode: number;

  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default RequestError;