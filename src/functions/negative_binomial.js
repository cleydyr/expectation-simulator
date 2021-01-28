import bernoulli from "./bernoulli";

export default class NegativeBinomial {
  constructor(r, p) {
    this.r = r;
    this.p = p;
  }  

  trial = () => {
    let f = 0;
    let s = 0;

    while (s < this.r) {
        if (bernoulli(this.p)) {
            s++;
        }
        else {
            f++;
        }
    }

    return f;
  }

  mean = () => this.r*(1 - this.p)/this.p;

  gen = function*() {
    while (true) {
      yield this.trial();
    }
  }
}
