import React from "react";
import GButton from "../component/button";
const Practise = () => {
  const handleCLick = () => {
    console.log("you click me");
  };
  return (
    <>
      <div>Practise</div>
      <GButton bgColor="red" padding="5px 10px" onClick={handleCLick}>
        Hello my guy
      </GButton>
    </>
  );
};

export default Practise;
