import React from "react";
import { FlipWords } from "./flip-wordsComponents";

export function FlipWordsDemo() {
  const words = ["Developer", "Designer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="relative mx-auto text-4xl font-normal -top-[33rem] text-white dark:text-neutral-400">
        I'm a
        <FlipWords words={words} /> <br />
        
      </div>
    </div>
  );
}
