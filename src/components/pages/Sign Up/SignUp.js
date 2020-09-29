import React from "react";
import Hero from "../../Hero";
import { homeObjOne, homeObjFour } from "./Data";

function SignUp() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjFour} />
    </>
  );
}

export default SignUp;
