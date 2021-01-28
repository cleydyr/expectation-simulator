import bernoulli from "./bernoulli";

export default class Geometric {
  constructor(p) {
    this.p = p;
  }  

  trial = () => {
    var failures = 0;

    while (!bernoulli(this.p)) {
        failures++;
    }

    return failures;
  }

  mean = () => (1 - this.p)/this.p;

  gen = function*() {
    while (true) {
      yield this.trial();
    }
  }
}
