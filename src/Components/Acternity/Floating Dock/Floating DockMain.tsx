import React from "react";
import { FloatingDock } from "./floating-dock";
import { FaGithub, FaTwitter, FaInstagram, FaTelegramPlane, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <FaGithub className="w-full h-full text-white dark:text-neutral-300" />
      ),
      href: "https://github.com/Yathukrishnan",
    },
    {
      title: "Twitter",
      icon: (
        <FaTwitter className="w-full h-full text-white dark:text-neutral-300" />
      ),
      href: "https://x.com/yathu_ad063?t=aKh7frojQ66Wvqzka9XIFA&s=09",
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="w-full h-full text-white dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/invites/contact/?igsh=9xx38bmunevu&utm_content=d1rn9qr",
    },
    {
      title: "Telegram",
      icon: (
        <FaTelegramPlane className="w-full h-full text-white dark:text-neutral-300" />
      ),
      href: "#", // Replace with your Telegram link if available
    },
    {
      title: "WhatsApp",
      icon: (
        <FaWhatsapp className="w-full h-full text-white dark:text-neutral-300" />
      ),
      href: "https://wa.me/qr/YXNUTYWULTAXG1",
    },
    {
      title: "Gmail",
      icon: (
        <FaEnvelope className="w-full h-full text-white dark:text-neutral-300" />
      ),
      href: "mailto:yathukrish10@gmail.com",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
