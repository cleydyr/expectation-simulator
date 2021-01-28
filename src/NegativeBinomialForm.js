import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import NegativeBinomial from "./functions/negative_binomial";

const DEFAULT_SUCCESSES = 30;
const DEFAULT_FAILURES = 50;

const processEvent = f => event => f(Number(event.target.value));

const NegativeBinomialForm = ({stateFn}) => {
  const [successes, setSuccesses] = useState(DEFAULT_SUCCESSES);
  const [failures, setFailures] = useState(DEFAULT_FAILURES);

  useEffect(() => {
    stateFn(new NegativeBinomial(successes, failures));
  }, [successes, failures,]);

  return (
    <ClayForm.Group>
      <label htmlFor="successes">Successes</label>
      <ClayInput
        id="successes"
        placeholder="Insert the number of successes here"
        type="number"
        onChange={processEvent(setSuccesses)}
        value={successes}
      />
      <label htmlFor="failures">Failures</label>
      <ClayInput
        id="failures"
        placeholder="Insert the number of failures here"
        type="number"
        onChange={processEvent(setFailures)}
        value={failures}
      />
    </ClayForm.Group>
  );
};

NegativeBinomialForm.formName = 'Negative Binomial';

export default NegativeBinomialForm;
