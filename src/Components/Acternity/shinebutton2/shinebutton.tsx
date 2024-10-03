import React from "react";
import ShinyButton from "./shinebuttonComponents";

export function ShinyButtonDemo1() {
  const handleHireMe = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=yathukrish10@gmail.com&su=Hire%20Me",
      "_blank"
    );
  };

  return <ShinyButton text="Hire Me" className="" onClick={handleHireMe} />;
}

export default ShinyButtonDemo1;
