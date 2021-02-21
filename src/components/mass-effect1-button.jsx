import React, { Component } from "react";

class MassEffect1Button extends Component {
  render() {
    return(
      <button
        className="btn btn-primary btn-block mx-auto Main-buttons"
        onClick={() => this.props.onLoadMassEffect1Click()}
      >
        MASS EFFECT 1
      </button>
    );
  };
};

export default MassEffect1Button;