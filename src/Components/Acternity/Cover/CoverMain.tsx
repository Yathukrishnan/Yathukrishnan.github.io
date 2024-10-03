import React from "react";
import { Cover } from "./cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="relative z-20 py-6 mx-auto mt-6 text-4xl font-semibold text-center md:text-5xl lg:text-5xl max-w-7xl bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <span className="text-white">Unveiling the Future with</span> <br />
        <span className="text-white">My Latest</span> <Cover>Project</Cover>
      </h1>
    </div>
  );
}
