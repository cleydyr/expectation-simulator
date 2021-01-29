import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import InputErrorFeedback from "./InputErrorFeedback";
import Geometric from "./functions/geometric";

const DEFAULT_P = 0.5;

const processEvent = f => event => f(Number(event.target.value));

const GeometricForm = ({stateFn}) => {
  const [p, setP] = useState(DEFAULT_P);

  useEffect(() => {
    if (p > 0 && p < 1) {
      stateFn(new Geometric(p));
    }
  }, [p, ]);

  return (
    <ClayForm.Group className={ (p <= 0 || p > 1) && "has-error"}>
      <label htmlFor="p">p</label>
      <ClayInput
        id="p"
        placeholder="Insert the probability of success here"
        type="number"
        step="0.05"
        onChange={processEvent(setP)}
        value={p}
        min={0}
        max={1}
      />
      <InputErrorFeedback
        show={p <= 0 || p > 1}
        message="The value of p must be between 0 (exclusive) and 1!"
      />
    </ClayForm.Group>
  );
};

GeometricForm.formName = 'Geometric';

export default GeometricForm;
