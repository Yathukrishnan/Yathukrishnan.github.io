"use client";

import React, { useEffect, useState } from "react";
import Particles from "./ParticlesComponents";

const ParticlesDemo = () => {
  const [color, setColor] = useState("#ffffff");

  // You can set a fixed theme or use a dynamic one
  const theme = "dark";

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl ">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
