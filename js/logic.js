
class LogicNOR {
  constructor(domElement, inputA, inputB, output) {
    let onInputChanged = () => {
      this.evaluate();
    }

    this._element = domElement;

    this._A = inputA;
    this._A.addChangeStateCallback(onInputChanged);
    this._B = inputB;
    this._B.addChangeStateCallback(onInputChanged);

    this._out = output;
  }

  evaluate() {
    return this._out.setState(!(this._A.getState() || this._B.getState()));
  }
}

class LogicWire {
  constructor(domElement, initialState) {
    this._state = initialState;                   // initial logic state of the wire
    this._element = domElement;                   // mapped DOM element
    this._onChangeValueCallbacks = $.Callbacks(); // create callback array
  }

  getState() {
    return this._state;
  }

  setState(newState) {
    let transitionFinished = () => {
      console.log(this._element + ": transition finished");
      this._state = newState;
      this._onChangeValueCallbacks.fire();
    }

    // has state changed?
    if(newState < this._state) {
      PathAnimation.log0(this._element, transitionFinished);
    } else if (newState > this._state) {
      PathAnimation.log1(this._element, transitionFinished);
    }
  }

  addChangeStateCallback(callback) {
    this._onChangeValueCallbacks.add(callback);
  }
}
