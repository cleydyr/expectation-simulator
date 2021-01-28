import bernoulli from "./bernoulli";

export default class Hypergeometric {
  constructor(successes, failures, sampleSize) {
    this.successes = successes;
    this.failures = failures;
    this.sampleSize = sampleSize;
  }  

  trial = () => {
    var s = this.successes;
    var f = this.failures;

    for (var i = 0; i < this.sampleSize; i++) {
      if (bernoulli(s / (s + f))) {
        s--;
      } else {
        f--;
      }
    }

    return this.successes - s;
  }

  mean = () => this.sampleSize*this.successes/(this.successes + this.failures);

  gen = function*() {
    while (true) {
      yield this.trial();
    }
  }
}
