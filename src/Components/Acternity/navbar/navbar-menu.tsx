"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { cn } from "../../../Utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center w-full">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className="relative flex justify-center px-8 py-6 bg-black border border-white rounded-full shadow-input"
        style={{ maxWidth: '600px', margin: '0 auto' }} // Reduced the max-width to 800px
      >
        <NavItem
          to="home"
          setActive={setActive}
          active={active}
          label="Home"
        />
        <NavItem
          to="project"
          setActive={setActive}
          active={active}
          label="Project"
        />
        <NavItem
          to="service"
          setActive={setActive}
          active={active}
          label="Service"
        />
        <NavItem
          to="skill"
          setActive={setActive}
          active={active}
          label="Skill"
        />
        <NavItem
          to="contact"
          setActive={setActive}
          active={active}
          label="Contact"
        />
      </nav>
    </div>
  );
}

const NavItem = ({
  to,
  setActive,
  active,
  label
}: {
  to: string;
  setActive: (item: string) => void;
  active: string | null;
  label: string;
}) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className={`text-sm cursor-pointer px-4 transition-colors duration-300 ease-in-out
        ${active === label ? 'text-red-500' : 'text-white'}
        hover:text-red-500 hover:underline`}
      onSetActive={() => setActive(label)}
    >
      {label}
    </Link>
  );
};
