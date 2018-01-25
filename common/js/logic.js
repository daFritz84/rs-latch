
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
    PathAnimation.tpd(this._element).then(() => {
      this._out.setState(!(this._A.getState() || this._B.getState()));
    });
  }
}

class LogicNAND {
	constructor(domElement, inputA, inputB, output) {
		let onInputChanged = () => {
			this.evaluate();
		}
	// identical to NOR gate
	this._element = domElement;

    this._A = inputA;
    this._A.addChangeStateCallback(onInputChanged);
    this._B = inputB;
    this._B.addChangeStateCallback(onInputChanged);

    this._out = output;
  }
	evaluate() {
    PathAnimation.tpd(this._element).then(() => {
      this._out.setState(!(this._A.getState() && this._B.getState()));
    });
  }
}

class LogicAND {
	constructor(domElement, inputA, inputB, output) {
		let onInputChanged = () => {
			this.evaluate();
		}
	// identical to NOR gate
	this._element = domElement;

    this._A = inputA;
    this._A.addChangeStateCallback(onInputChanged);
    this._B = inputB;
    this._B.addChangeStateCallback(onInputChanged);

    this._out = output;
  }
	evaluate() {
    PathAnimation.tpd(this._element).then(() => {
      this._out.setState((this._A.getState() && this._B.getState()));
    });
  }
}


class LogicNOT {
	constructor(domElement, inputA, output) {
		let onInputChanged = () => {
			this.evaluate();
		}
	// identical to NOR gate
	this._element = domElement;

    this._A = inputA;
    this._A.addChangeStateCallback(onInputChanged);

    this._out = output;
  }
	evaluate() {
    PathAnimation.tpd(this._element).then(() => {
      this._out.setState(!(this._A.getState()));
			console.log("NOT gate activated");
    });
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
    // common transitionHandler for both log0 and log1 transitions
    let transitionHandler = () => {
        this._state = newState;
        this._onChangeValueCallbacks.fire();
      };

    // has state changed?
    if(newState < this._state) {
      PathAnimation.log0(this._element).then(transitionHandler);
    } else if (newState > this._state) {
      PathAnimation.log1(this._element).then(transitionHandler);
    }

  }

  addChangeStateCallback(callback) {
    this._onChangeValueCallbacks.add(callback);
  }
}
