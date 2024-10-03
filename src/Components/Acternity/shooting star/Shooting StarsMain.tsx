"use client";
import React from "react";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[70rem] rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
