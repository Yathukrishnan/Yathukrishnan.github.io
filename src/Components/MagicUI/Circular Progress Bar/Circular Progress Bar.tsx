"use client";

import { useEffect, useState } from "react";
import CircularProgressBar from "./Circular Progress BarComponents";
import React from "react";

export function AnimatedCircularProgressBarDemo() {
  // Set the initial values based on the specified percentages.
  const initialValues = [0, 0, 0, 0]; // Start all progress bars at 0.
  const targetValues = [80, 85, 80, 80]; // The target values for each progress bar.

  const [values, setValues] = useState<number[]>(initialValues);

  useEffect(() => {
    const intervals = values.map((value, index) => {
      // For each progress bar, increment its value until it reaches the target value.
      if (value < targetValues[index]) {
        return setInterval(() => {
          setValues((prevValues) =>
            prevValues.map((val, idx) =>
              idx === index ? Math.min(val + 10, targetValues[idx]) : val
            )
          );
        }, 200);
      }
    });

    // Clear intervals once the target value is reached.
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [values]);

  return (
    <div
      className="flex flex-wrap justify-center gap-8" // Adjust the `gap-8` to change the space between circles.
    >
      <CircularProgressBar
        max={100}
        min={0}
        value={values[0]}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        title="AI" // Title for the first circle.
      />
      <CircularProgressBar
        max={100}
        min={0}
        value={values[1]}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        title="HTML" // Title for the second circle.
      />
      <CircularProgressBar
        max={100}
        min={0}
        value={values[2]}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        title="CSS" // Title for the third circle.
      />
      <CircularProgressBar
        max={100}
        min={0}
        value={values[3]}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        title="React" // Title for the fourth circle.
      />
    </div>
  );
}
