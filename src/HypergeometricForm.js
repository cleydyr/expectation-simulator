import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import InputErrorFeedback from "./InputErrorFeedback";
import HyperGeometric from "./functions/hypergeometric";

const DEFAULT_SUCCESSES = 30;
const DEFAULT_FAILURES = 50;
const DEFAULT_SAMPLE_SIZE = 40;

const HyperGeometricForm = ({stateFn}) => {
  const [state, setState] = useState({
    successes: DEFAULT_SUCCESSES,
    failures: DEFAULT_FAILURES,
    sampleSize: DEFAULT_SAMPLE_SIZE,
  });

  const processEvent = event => setState({
    ...state,
    [event.target.id]: !event.target.value || Number(event.target.value),
  });

  const allGood = ({successes, failures, sampleSize}) => {
    return sampleSize < successes + failures &&
      successes >= 0 && failures >= 0;
  }

  useEffect(() => {
    const {
      successes,
      failures,
      sampleSize,
    } = state;

    if (allGood(state)) {
      stateFn(new HyperGeometric(successes, failures, sampleSize));
    }
  }, [state]);

  const {
    successes,
    failures,
    sampleSize,
  } = state;

  return (
    <ClayForm.Group className={ !allGood(state) && "has-error"}>
      <label htmlFor="successes">Successes</label>
      <ClayInput
        id="successes"
        placeholder="Insert the number of successes here"
        type="number"
        onChange={processEvent}
        value={successes}
        min={0}
      />
      <InputErrorFeedback
        show={successes < 0}
        message="Successes can't be negative"
      />
      <label htmlFor="failures">Failures</label>
      <ClayInput
        id="failures"
        placeholder="Insert the number of failures here"
        type="number"
        onChange={processEvent}
        value={failures}
        min={0}
      />
      <InputErrorFeedback
        show={failures < 0}
        message="Failures can't be negative"
      />
      <label htmlFor="sampleSize">Sample size</label>
      <ClayInput
        id="sampleSize"
        placeholder="Insert the sample size here"
        type="number"
        onChange={processEvent}
        value={sampleSize}
        max={successes + failures}
        min={0}
      />
      <InputErrorFeedback
        show={successes > 0 && failures > 0 && sampleSize > successes + failures}
        message="Sample size can't be more than the sum of successes and failures!"
      />
    </ClayForm.Group>
  );
};

HyperGeometricForm.formName = 'Hypergeometric';

export default HyperGeometricForm;
