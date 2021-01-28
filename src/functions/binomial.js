import bernoulli from "./bernoulli";

export default class Binomial {
  constructor(p, sampleSize) {
    this.p = p;
    this.sampleSize = sampleSize;
  }

  trial = () => {
    return [...(new Array(this.sampleSize))]
        .map(__ => bernoulli(this.p))
        .reduce((acc, cur) => acc + cur, 0);
  }

  mean = () => this.sampleSize*this.p;

  gen = function*() {
    while (true) {
      yield this.trial();
    }
  }
}
