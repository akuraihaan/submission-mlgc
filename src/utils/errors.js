export class PredictionError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PredictionError';
  }
}