"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beamComponents";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="relative max-w-2xl pt-4 mx-auto antialiased">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            <h2 className="px-6 py-2 mb-6 text-lg font-semibold text-white bg-black rounded-full w-fit">
              {item.badge}
            </h2>

            {/* Increased font size for the title */}
            <p className={twMerge("font-sans text-2xl font-bold mb-6")}>
              {item.title}
            </p>

            {/* Increased font size for content and improved readability */}
            <div className="text-base prose prose-lg text-white dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="object-cover mb-10 rounded-lg"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Web Development",
    description: (
      <>
        <p>
          Web development involves building and maintaining websites. It encompasses various tasks such as web design, web programming, and database management. Modern web development often includes both front-end and back-end development to create dynamic and interactive websites.
        </p>
        <p>
          Front-end development focuses on the visual and interactive aspects of a website. This includes designing layouts, implementing user interfaces, and ensuring a responsive design. Technologies such as HTML, CSS, and JavaScript are commonly used.
        </p>
        <p>
          Back-end development involves server-side logic, databases, and application integration. It ensures that the front-end and back-end of a website communicate seamlessly. Server-side languages like Node.js, Python, and PHP are often used.
        </p>
      </>
    ),
    badge: "Web Development",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Xt5aZiKWUW_UJPx9UjgWLQHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "Web Designing",
    description: (
      <>
        <p>
          Web designing is the process of creating the visual layout and aesthetic of a website. It focuses on the look and feel of the site, ensuring that it is both attractive and user-friendly. Designers work on elements such as color schemes, typography, and overall layout.
        </p>
        <p>
          Effective web design balances creativity with functionality. This includes designing intuitive navigation, creating engaging visuals, and ensuring a consistent style throughout the website. Tools like Adobe XD and Figma are commonly used for web design.
        </p>
        <p>
          Responsive design is crucial in web design to ensure that websites work well on a variety of devices, including desktops, tablets, and smartphones. This involves designing flexible layouts that adapt to different screen sizes.
        </p>
      </>
    ),
    badge: "Web Designing",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.EeZQNxbf-XfBFSU90oPAvQHaEu&pid=Api&P=0&h=180",
  },
  {
    title: "AI Software Development",
    description: (
      <>
        <p>
          AI software development focuses on creating applications and systems that use artificial intelligence to perform tasks that typically require human intelligence. This includes machine learning, natural language processing, and computer vision.
        </p>
        <p>
          Machine learning involves training algorithms to recognize patterns and make predictions based on data. This can be used in a variety of applications, from recommendation systems to predictive analytics.
        </p>
        <p>
          Natural language processing enables computers to understand and interact with human language. This includes applications like chatbots, language translation, and sentiment analysis.
        </p>
        <p>
          Computer vision allows machines to interpret and understand visual information from the world. This technology is used in image recognition, object detection, and autonomous vehicles.
        </p>
      </>
    ),
    badge: "AI Software Development",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.00yfuuBw__etbP69DGFJywHaHa&pid=Api&P=0&h=180",
  },
];
