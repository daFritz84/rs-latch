// ES6 classes
class LogicNOR {
  constructor(spinnerElem, inputA, inputB, output) {
    this.spinnerElem = spinnerElem;
    this.inputA = inputA;
    this.inputB = inputB;
    this.output = output;
  }

  evaluate() {
    return this.output.state = !(this.inputA.state || this.inputB.state);
  }
}

class LogicWire {
  constructor(initialState) {
    this.state = initialState;
  }
}
