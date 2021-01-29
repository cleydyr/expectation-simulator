import ClayButton from "@clayui/button";
import ClayChart from "@clayui/charts";
import { ClayInput } from "@clayui/form";
import {ClayRadio, ClayRadioGroup} from '@clayui/form';

import React from "react";
import ReactDOM from "react-dom";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

import HyperGeometricForm from "./HypergeometricForm";
import average from "./functions/average";
import BinomialForm from "./BinomialForm";
import GeometricForm from "./GeometricForm";
import NegativeBinomialForm from "./NegativeBinomialForm";

const distributions = [
  HyperGeometricForm,
  BinomialForm,
  GeometricForm,
  NegativeBinomialForm,
];

class App extends React.Component {
  static DEFAULT_SIMULATIONS = 1000;

  constructor() {
    super();

    this.state = {
      simulations: App.DEFAULT_SIMULATIONS,
      data: ["count"],
      distributionIndex: 0,
      loading: false,
    };
  }

  simulate = () => {
    const { simulations, rv } = this.state;

    const rv_generator = rv.gen();

    this.setState(
      {
        loading: true,
      },
      () => {
        const experiment = [...new Array(simulations)]
          .map(__ => rv_generator.next().value)
          .reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;

            return acc;
          }, []);

        const filledData = [...experiment].map(v => v || 0);

        this.setState({
          data: ["count", ...filledData],
          mean: average(filledData, simulations),
          loading: false,
        });
      });
  };

  changeParameters = (event) => {
    this.setState({
      [event.target.id]: Number(event.target.value)
    });
  };

  changeDistribution = (index) => {
    this.setState({
      distributionIndex: index,
    });
  }

  render() {
    const {
      distributionIndex,
      simulations,
      rv,
      mean,
      data,
    } = this.state;

    const form = distributions[distributionIndex];

    return (
      <div className="container">
        <div className="sheet sheet-lg">
          <div className="sheet-section">
            <h3 className="sheet-subtitle">Distribution</h3>
            <ClayRadioGroup
              inline
              id="distribution"
              onSelectedValueChange={this.changeDistribution}
              selectedValue={distributionIndex}
            >
              {distributions.map((distribution, i) => <ClayRadio key={i} label={distribution.formName} value={i} />)}
            </ClayRadioGroup>
          </div>
          <div className="sheet-header">
            <div className="sheet-title">
              {form.formName}
            </div>
          </div>
          <div className="sheet-section">
            <h3 className="sheet-subtitle">Parameters</h3>
            {
              React.createElement(
                form,
                {
                  stateFn: (rv) => this.setState((state) => ({rv})),
                }
              )
            }
          </div>
          <label htmlFor="simulations">Number of simulations</label>
          <ClayInput
            id="simulations"
            placeholder="Insert the number of simulations here"
            type="number"
            onChange={this.changeParameters}
            value={simulations}
          />
          <div className="sheet-footer">
            <div className="btn-group-item">
              <ClayButton onClick={this.resetFields} displayType="secondary">
                Reset
              </ClayButton>
            </div>
            <div className="btn-group-item">
              <ClayButton onClick={this.simulate} displayType="primary">
                Simulate
              </ClayButton>
            </div>
          </div>
        </div>
        <div>
          <div>
            {
              rv && (<span><strong>Expected value: </strong> {rv.mean()}</span>)
            }
          </div>
          <div>
            {
              (<><strong>Simulation average: </strong> {mean}</>)
            }
          </div>
          <div>
            {
            (
              <ClayChart
                data={{
                  columns: [data],
                  type: "bar"
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
