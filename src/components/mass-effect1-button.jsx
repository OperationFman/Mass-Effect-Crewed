import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MassEffect1Button = () => {
  const test = useAuth0
  console.log(test);
    return (
    <button
      className="btn btn-outline-primary btn-block mx-auto Main-buttons"
      onClick={}
    >
      Mass Effect 1
    </button>
  );
};

export default MassEffect1Button;