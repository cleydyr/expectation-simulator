import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import InputErrorFeedback from "./InputErrorFeedback";
import NegativeBinomial from "../functions/negative_binomial";

const DEFAULT_SUCCESSES = 30;
const DEFAULT_P = 0.5;

const processEvent = f => event => f(Number(event.target.value));

const NegativeBinomialForm = ({stateFn}) => {
  const [successes, setSuccesses] = useState(DEFAULT_SUCCESSES);
  const [p, setP] = useState(DEFAULT_P);

  const allGood = (p, successes) => p > 0 && p < 1 && successes > 0;

  useEffect(() => {
    if (allGood(p, successes)) {
      stateFn(new NegativeBinomial(successes, p));
    }
  }, [successes, p,]);

  return (
    <ClayForm.Group className={ !allGood(p, successes) && "has-error"}>
      <label htmlFor="successes">Successes</label>
      <ClayInput
        id="successes"
        placeholder="Insert the number of successes until stopping the trials here"
        type="number"
        onChange={processEvent(setSuccesses)}
        value={successes}
        min={1}
      />
      <InputErrorFeedback
        show={successes <= 0}
        message="The number of successes must be positive!"
      />
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
        show={p <= 0 || p > 1}
        message="The value of p must be between 0 (exclusive) and 1!"
      />
    </ClayForm.Group>
  );
};

NegativeBinomialForm.formName = 'Negative Binomial';

export default NegativeBinomialForm;
