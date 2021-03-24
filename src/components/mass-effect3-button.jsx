import React, { Component } from "react";

class MassEffect3Button extends Component {
  render() {
    return(
      <React.Fragment>
      <button
        className="btn btn-danger btn-block mx-auto Main-buttons"
        onClick={() => this.props.onLoadMassEffect3Click()}
      >
        MASS EFFECT 3
      </button>
      <br></br><br></br>
      </React.Fragment>
    );
  };
};

export default MassEffect3Button;