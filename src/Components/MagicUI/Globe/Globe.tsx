import React from "react";
import Globe from "./GlobeComponents";

export function GlobeDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border border-black bg-black px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="text-6xl font-semibold leading-none text-center text-white whitespace-pre-wrap pointer-events-none bg-clip-text">
        Link
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.5),rgba(0,0,0,0))]" />
    </div>
  );
}
