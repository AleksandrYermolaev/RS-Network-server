class RequestError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.name = 'Request error';
  }
}

export default RequestError;
