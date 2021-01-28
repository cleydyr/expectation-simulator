import ClayButton from "@clayui/button";
import ClayChart from "@clayui/charts";
import { ClayInput } from "@clayui/form";
import ClayLoadingIndicator from '@clayui/loading-indicator';

// import ClayProgressBar from "@clayui/progress-bar";

import React from "react";
import ReactDOM from "react-dom";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

import HyperGeometricForm from "./HypergeometricForm";

const distributions = [
  HyperGeometricForm,
];

class App extends React.Component {
  static DEFAULT_SIMULATIONS = 1000;

  static average = (data, simulations) => {
    let m = 0;

    for (var i = 1; i < data.length; i++) {
      m += (i - 1)*data[i]/simulations;
    }

    return m;
  }

  constructor() {
    super();

    this.state = {
      simulations: App.DEFAULT_SIMULATIONS,
      data: ["data"],
      component: distributions[0],
      loading: false,
    };
  }

  simulate = () => {
    const { simulations, rv } = this.state;

    const rv_generator = rv.gen();

    this.setState(
      {
        ...this.state,
        loading: true,
      },
      () => {
        const experiment = [...new Array(simulations)]
          .map(__ => rv_generator.next().value)
          .reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;

            return acc;
          }, []);

        const data = ["data", ...[...experiment].map(v => v || 0)];

        this.setState({
          ...this.state,
          data,
          mean: App.average(data, simulations),
          loading: false,
        });
      });

      console.log('finish event')
  };

  changeParameters = (event) => {
    this.setState({
      ...this.state,
      [event.target.id]: Number(event.target.value)
    });
  };

  render() {
    return (
      <div className="container">
        {
          React.createElement(
            this.state.component,
            {
              stateFn: (rv) => this.setState((state) => ({rv})),
            }
          )
        }
        <label htmlFor="simulations">Number of simulations</label>
        <ClayInput
          id="simulations"
          placeholder="Insert the number of simulations here"
          type="number"
          onChange={this.changeParameters}
          value={this.state.simulations}
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
        <div>
          <div>
            {
              this.state.rv && 
                (<span><strong>Expected value: </strong> {this.state.rv.mean()}</span>)
            }
          </div>
          <div>
            {
              (<><strong>Simulation average: </strong> {this.state.mean}</>)
            }
          </div>
          <div>
            {this.state.loading ? <ClayLoadingIndicator /> :
            (
              <ClayChart
                data={{
                  columns: [this.state.data],
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
