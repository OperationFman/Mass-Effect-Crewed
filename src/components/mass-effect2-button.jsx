import React, { Component } from "react";

class MassEffect2Button extends Component {
  render() {
    return(
      <button
        className="btn btn-warning btn-block mx-auto Main-buttons Mass-Effect-2"
        onClick={() => this.props.onLoadMassEffect2Click()}
      >
        MASS EFFECT 2
      </button>
    );
  };
};

export default MassEffect2Button;