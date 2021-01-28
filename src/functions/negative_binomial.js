import bernoulli from "./bernoulli";

export default class NegativeBinomial {
  constructor(successes, failures) {
    this.successes = successes;
    this.failures = failures;
  }  

  trial = () => {
    var f = this.failures;

    while (!bernoulli(this.successes/(this.successes + f))) {
        f--;
    }

    return this.failures - f;
  }

  mean = () => (1 - this.p)/this.p;

  gen = function*() {
    while (true) {
      yield this.trial();
    }
  }
}
