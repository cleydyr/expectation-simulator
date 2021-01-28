import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import NegativeBinomial from "./functions/negative_binomial";

const DEFAULT_SUCCESSES = 30;
const DEFAULT_P = 0.5;

const processEvent = f => event => f(Number(event.target.value));

const NegativeBinomialForm = ({stateFn}) => {
  const [successes, setSuccesses] = useState(DEFAULT_SUCCESSES);
  const [p, setP] = useState(DEFAULT_P);

  useEffect(() => {
    stateFn(new NegativeBinomial(successes, p));
  }, [successes, p,]);

  return (
    <ClayForm.Group>
      <label htmlFor="successes">Successes</label>
      <ClayInput
        id="successes"
        placeholder="Insert the number of successes until stopping the trials here"
        type="number"
        onChange={processEvent(setSuccesses)}
        value={successes}
      />
      <label htmlFor="p">p</label>
      <ClayInput
        id="p"
        placeholder="Insert the probability of success here"
        type="number"
        step="0.05"
        onChange={processEvent(setP)}
        value={p}
      />
    </ClayForm.Group>
  );
};

NegativeBinomialForm.formName = 'Negative Binomial';

export default NegativeBinomialForm;
