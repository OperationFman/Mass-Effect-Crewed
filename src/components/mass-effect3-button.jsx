import React, { Component } from "react";

class MassEffect3Button extends Component {
  render() {
    return(
      <button
        className="btn btn-danger btn-block mx-auto Main-buttons"
        onClick={() => this.props.onLoadMassEffect3Click()}
      >
        MASS EFFECT 3
      </button>
    );
  };
};

export default MassEffect3Button;