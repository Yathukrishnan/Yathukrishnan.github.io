"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 w-full h-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full top-2 right-2 lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="object-cover object-top w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm font-bold text-white bg-green-500 rounded-full"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid items-start w-full max-w-5xl grid-cols-1 gap-20 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="flex flex-col p-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl"
          >
            <div className="flex flex-col w-full gap-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="object-cover object-top w-full rounded-lg h-60"
                />
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-base font-medium text-center text-white md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-base text-center text-white md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
    {
        description: "ASME Website",
        title: "ASME Landing Page",
        src: "https://www.kindpng.com/picc/m/20-204303_asme-logo-asme-hd-png-download.png",
        ctaText: "Visit",
        ctaLink: "https://yathukrishnan.github.io/ASME_LANDING-/",
        content: () => {
          return (
            <p>
              Explore the ASME (American Society of Mechanical Engineers) landing
              page, a platform dedicated to advancing the art, science, and practice
              of multidisciplinary engineering and allied sciences around the globe.
              This website offers insights into ASME's mission, resources, and
              upcoming events, providing a valuable hub for engineers and technical
              professionals. <br /> <br /> Dive into the world of engineering with
              ASME, where innovation meets excellence, and discover how this
              prestigious organization continues to shape the future of the industry.
            </p>
          );
    },
  },
  {
    description: "Light-Track Auto",
    title: "Light Detection Car Control",
    src: "https://tse3.mm.bing.net/th?id=OIP.O9BemZ1001vsXq91js7qgAHaEK&pid=Api&P=0&h=180",
    ctaText: "View Project",
    ctaLink: "https://github.com/Yathukrishnan/Light-Track-Auto",
    content: () => {
      return (
        <p>
          The Light-Track Auto project is an innovative system that allows you to
          control a car in a game using light detection technology. By tracking
          the intensity and direction of light, the car's movement can be
          seamlessly controlled, creating a unique and interactive gaming
          experience. <br /> <br /> This project showcases the potential of light
          detection systems in gaming, blending cutting-edge technology with
          practical application. Explore the code and detailed implementation on
          GitHub to learn more about how this project was developed and how it
          functions.
        </p>
      );
    },
  },

  {
    description: "Buy Now Page",
    title: "E-Commerce Buy Now Project",
    src: "https://tse4.mm.bing.net/th?id=OIP.UqqTa19Z7fiHZa_-uLllVwHaE8&pid=Api&P=0&h=180",
    ctaText: "View Project",
    ctaLink: "https://github.com/Yathukrishnan/Buy-now",
    content: () => {
      return (
        <p>
          The "Buy Now" project is a streamlined e-commerce page that focuses on
          providing users with a quick and efficient purchase experience. This
          project is designed to simplify the buying process, making it easier for
          customers to make purchases with minimal steps. <br /> <br /> The
          project showcases a clean and user-friendly interface that can be easily
          integrated into various online retail platforms. Visit the GitHub
          repository to explore the source code and learn more about how this
          project was developed and its potential applications in modern
          e-commerce.
        </p>
      );
    },
  },
  {
    description: "Commercial Landing Page",
    title: "Landing Page Project",
    src: "https://tse4.mm.bing.net/th?id=OIP.UqqTa19Z7fiHZa_-uLllVwHaE8&pid=Api&P=0&h=180",  // You can replace this image URL with the appropriate one for the landing page.
    ctaText: "View Project",
    ctaLink: "https://github.com/Yathukrishnan/Landing-page",
    content: () => {
      return (
        <p>
          The Landing Page project is a commercial web page designed to captivate
          visitors and convert them into customers. This project highlights the
          importance of an engaging and well-structured landing page, with
          attention to design, content, and user experience. <br /> <br /> Explore
          the project on GitHub to see how this landing page is built to enhance
          brand presence and drive conversions in a competitive online market.
        </p>
      );
    },
  },
  {
    description: "AI Medical Recommendation System",
    title: "Medical Recommendation Project",
    src: "https://tse2.mm.bing.net/th?id=OIP.6vqWIM4G7_wcNij5d31pVQHaEK&pid=Api&P=0&h=180",
    ctaText: "View Project",
    ctaLink: "https://github.com/Yathukrishnan/Medical-Recommendation-System",
    content: () => {
      return (
        <p>
          The AI Medical Recommendation System is a project focused on providing
          intelligent medical recommendations based on patient data and clinical
          guidelines. Utilizing advanced algorithms and AI techniques, this system
          aims to assist healthcare professionals in making informed decisions
          that improve patient outcomes. <br /> <br /> Explore the project on
          GitHub to learn more about its development, underlying technologies, and
          potential applications in the healthcare industry.
        </p>
      );
    },
  },
  {
    description: "ASME Second Page",
    title: "ASME Second Page",
    src: "https://www.kindpng.com/picc/m/20-204303_asme-logo-asme-hd-png-download.png",
    ctaText: "Visit",
    ctaLink: "https://yathukrishnan.github.io/ASME_SECOND/",
    content: () => {
      return (
        <p>
          Visit the ASME Second Page, an extension of the primary ASME landing
          site. This page provides additional resources, deeper insights into
          specialized engineering topics, and access to further ASME-related
          content. <br /> <br /> Whether you're looking for advanced materials,
          technical standards, or networking opportunities, this page serves as a
          valuable resource for engineers and professionals seeking to enhance
          their knowledge and connect with the ASME community.
        </p>
      );
    },
  },
];
