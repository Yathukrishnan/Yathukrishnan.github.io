import React from "react";
import ShinyButton from "./Shiny ButtonComponents";

export function ShinyButtonDemo() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=13dXP7XYrE8GmXHOKMn-AIPkG_XLxml1X",
      "_blank"
    );
  };

  return <ShinyButton text="Resume" className="" onClick={handleDownload} />;
}





