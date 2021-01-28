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

    const trials = [...(new Array(this.sampleSize))]
      .reduce(({s, f}) => {
        const success = bernoulli(s/(s + f));

        return {
          s: s - success,
          f: f - !success,
        };
      }, {s: this.successes, f: this.failures});

    return this.successes - trials.s;
  }

  mean = () => this.sampleSize*this.successes/(this.successes + this.failures);

  gen = function*() {
    while (true) {
      yield this.trial();
    }
  }
}
