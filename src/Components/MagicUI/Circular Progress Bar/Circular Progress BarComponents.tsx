import React from "react";
import { cn } from "../../../Utils/cn";

interface Props {
  max: number;
  value: number;
  min: number;
  gaugePrimaryColor: string;
  gaugeSecondaryColor: string;
  title: string;
  className?: string;
}

export default function CircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  title,
  className,
}: Props) {
  const radius = 100; // Radius in pixels (approx. 3 cm)
  const strokeWidth = 8; // Stroke width in pixels
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke dash offset based on the percentage
  const currentPercent = ((value - min) / (max - min)) * 100;
  const strokeDashoffset = circumference - (currentPercent / 100) * circumference;

  return (
    <div
      className={cn(
        "relative text-2xl font-semibold flex flex-col items-center",
        className
      )}
      style={
        {
          "--circle-size": `${radius * 2}px`, // Adjusted size
          "--circumference": circumference,
          "--percent-to-px": `${circumference / 100}px`,
          "--gap-percent": "5",
          "--offset-factor": "0",
          "--transition-length": "1s",
          "--transition-step": "200ms",
          "--delay": "0s",
          "--percent-to-deg": "3.6deg",
          transform: "translateZ(0)",
        } as React.CSSProperties
      }
    >
      <svg
        fill="none"
        className="size-full"
        strokeWidth={strokeWidth} // Stroke width applied here
        viewBox={`0 0 ${radius * 2} ${radius * 2}`} // Adjusted viewBox size
        width={radius * 2} // Ensure SVG size matches circle size
        height={radius * 2} // Ensure SVG size matches circle size
      >
        {/* Background circle */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth} // Adjusted radius to fit within the viewBox
          strokeWidth={strokeWidth} // Stroke width applied here
          stroke={gaugeSecondaryColor}
          className="opacity-50"
          style={
            {
              strokeDasharray: `${circumference}px ${circumference}px`,
              strokeDashoffset: `0px`,
              transition: "stroke-dashoffset 1s ease",
            } as React.CSSProperties
          }
        />
        {/* Foreground circle */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth} // Adjusted radius to fit within the viewBox
          strokeWidth={strokeWidth} // Stroke width applied here
          stroke={gaugePrimaryColor}
          strokeDasharray={`${circumference}px ${circumference}px`}
          strokeDashoffset={strokeDashoffset} // Correct stroke offset calculation
          strokeLinecap="round"
          className="opacity-100"
          style={
            {
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke-dashoffset 1s ease",
            } as React.CSSProperties
          }
        />
      </svg>
      <span
        data-current-value={currentPercent}
        className="text-white duration-[var(--transition-length)] delay-[var(--delay)] absolute inset-0 m-auto size-fit ease-linear animate-in fade-in"
      >
        {Math.round(currentPercent)}%
      </span>
      <p className="text-white" style={{ marginTop: '3rem' }}> {/* Increased margin */}
        {title}
      </p>
    </div>
  );
}
