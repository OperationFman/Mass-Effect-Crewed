import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MassEffect2Button = () => {
  const test = useAuth0
  console.log(test);
    return (
    <button
      className="btn btn-warning btn-block mx-auto Main-buttons Mass-Effect-2"
    >
      MASS EFFECT 2
    </button>
  );
};

export default MassEffect2Button;