class RequestError {
  statusCode: number;

  message: string;

  constructor(statusCode: number, message: string) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default RequestError;