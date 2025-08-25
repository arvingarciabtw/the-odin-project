class calculator {
  static add(operandOne, operandTwo) {
    if (typeof operandOne !== "number" || typeof operandTwo !== "number") {
      return "ERROR";
    }
    return operandOne + operandTwo;
  }

  static subtract(operandOne, operandTwo) {
    return operandOne - operandTwo;
  }

  static multiply(operandOne, operandTwo) {
    return operandOne * operandTwo;
  }

  static divide(operandOne, operandTwo) {
    if (operandTwo === 0) {
      return "ERROR";
    }
    return operandOne / operandTwo;
  }
}

export { calculator };
