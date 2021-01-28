import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import Geometric from "./functions/geometric";

const DEFAULT_P = 0.5;

const processEvent = f => event => f(Number(event.target.value));

const GeometricForm = ({stateFn}) => {
  const [p, setP] = useState(DEFAULT_P);

  useEffect(() => {
    stateFn(new Geometric(p));
  }, [p, ]);

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
    </ClayForm.Group>
  );
};

GeometricForm.formName = 'Geometric';

export default GeometricForm;
