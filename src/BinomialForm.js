import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import Binomial from "./functions/binomial";

const DEFAULT_P = 0.5;
const DEFAULT_SAMPLE_SIZE = 40;

const processEvent = f => event => f(Number(event.target.value));

const BinomialForm = ({stateFn}) => {
  const [p, setP] = useState(DEFAULT_P);
  const [sampleSize, setSampleSize] = useState(DEFAULT_SAMPLE_SIZE);

  useEffect(() => {
    stateFn(new Binomial(p, sampleSize));
  }, [p, sampleSize,]);

  return (
    <ClayForm.Group>
      <label htmlFor="p">p</label>
      <ClayInput
        id="p"
        placeholder="Insert the probability of success here"
        type="number"
        step="0.05"
        onChange={processEvent(setP)}
        value={p}
      />
      <label htmlFor="sampleSize">Sample size</label>
      <ClayInput
        id="sampleSize"
        placeholder="Insert the sample size here"
        type="number"
        onChange={processEvent(setSampleSize)}
        value={sampleSize}
      />
    </ClayForm.Group>
  );
};

BinomialForm.formName = 'Binomial';

export default BinomialForm;
