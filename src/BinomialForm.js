import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import Binomial from "./functions/binomial";

import InputErrorFeedback from "./InputErrorFeedback";

const DEFAULT_P = 0.5;
const DEFAULT_SAMPLE_SIZE = 40;

const processEvent = f => event => f(Number(event.target.value));

const BinomialForm = ({stateFn}) => {
  const [p, setP] = useState(DEFAULT_P);
  const [sampleSize, setSampleSize] = useState(DEFAULT_SAMPLE_SIZE);

  const allGood = () => p >= 0 && p <= 1 && sampleSize >= 0;

  useEffect(() => {
    if (allGood()) {
      stateFn(new Binomial(p, sampleSize));
    }
  }, [p, sampleSize,]);

  return (
    <ClayForm.Group className={ !allGood() && "has-error"}>
      <label htmlFor="p">p</label>
      <ClayInput
        id="p"
        placeholder="Insert the probability of success here"
        type="number"
        step="0.05"
        onChange={processEvent(setP)}
        value={p}
        max={1}
        min={0}
      />
      <InputErrorFeedback
        show={p < 0 || p > 1}
        message="The value of p must be between 0 and 1!"
      />
      <label htmlFor="sampleSize">Sample size</label>
      <ClayInput
        id="sampleSize"
        placeholder="Insert the sample size here"
        type="number"
        onChange={processEvent(setSampleSize)}
        value={sampleSize}
      />
      <InputErrorFeedback
        show={sampleSize < 0}
        message="Sample size can't be negative!"
      />
    </ClayForm.Group>
  );
};

BinomialForm.formName = 'Binomial';

export default BinomialForm;
