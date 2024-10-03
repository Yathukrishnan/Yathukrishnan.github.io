"use client";
import React from "react";
import { TextGenerateEffect } from "./text-generate-effectComponents";

const words = `I’m Yathukrishnan T. U,
an Artificial Intelligence and Data Science student at St. Joseph College of Engineering and Technology, Palai.
Currently, I work as a web developer at Pillzen Pvt. Ltd.,
where I apply my skills to develop modern, responsive websites and web applications.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
