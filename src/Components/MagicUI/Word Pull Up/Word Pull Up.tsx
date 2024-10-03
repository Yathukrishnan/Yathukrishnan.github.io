import React from "react";
import WordPullUp from "./Word Pull UpComponents"; // Ensure correct import path

const WordPullUpDemo: React.FC = () => {
  return (
    <WordPullUp
      className="text-4xl font-bold tracking-[-0.02em] text-white dark:text-white md:text-5xl md:leading-[5rem]"
      words="Contact Me"
    />
  );
};

export default WordPullUpDemo;
