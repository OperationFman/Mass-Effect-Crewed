import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MassEffect3Button = () => {
  const test = useAuth0
  console.log(test);
    return (
    <button
      className="btn btn-danger btn-block mx-auto Main-buttons"
    >
      MASS EFFECT 3
    </button>
  );
};

export default MassEffect3Button;