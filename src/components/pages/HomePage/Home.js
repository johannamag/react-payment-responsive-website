import React from "react";
import Hero from "../../Hero";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjFour} />
    </>
  );
}

export default Home;
