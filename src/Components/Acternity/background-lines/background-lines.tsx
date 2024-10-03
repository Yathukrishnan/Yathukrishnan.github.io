import React from "react";
import { BackgroundLines } from "./background-linesComponents";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-full px-4">
      <h2 className="relative z-20 py-2 font-sans text-5xl font-bold tracking-tight text-center text-white md:text-4xl lg:text-7xl md:py-10">
        Contact
      </h2>
      <p className="max-w-5xl mx-[5rem] text-3xl text-white md:text-3xl">
        Feel free to contact me for any inquiries or collaborations.
        I’m open to paid work opportunities and am also ready to work under companies for exciting projects. 
        Let’s create something amazing together!
      </p>
    </BackgroundLines>
  );
}
