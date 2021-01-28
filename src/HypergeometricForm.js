import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import HyperGeometric from "./functions/hypergeometric";

const DEFAULT_SUCCESSES = 30;
const DEFAULT_FAILURES = 50;
const DEFAULT_SAMPLE_SIZE = 40;

const processEvent = f => event => f(Number(event.target.value));

const HyperGeometricForm = ({stateFn}) => {
  const [successes, setSuccesses] = useState(DEFAULT_SUCCESSES);
  const [failures, setFailures] = useState(DEFAULT_FAILURES);
  const [sampleSize, setSampleSize] = useState(DEFAULT_SAMPLE_SIZE);

  useEffect(() => {
    stateFn(new HyperGeometric(successes, failures, sampleSize));
  }, [successes, failures, sampleSize,]);

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

HyperGeometricForm.formName = 'Hypergeometric';

export default HyperGeometricForm;
