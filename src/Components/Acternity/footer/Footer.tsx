import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-black">
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Left side: Image */}
        <div className="flex items-center">
          <img
            src="/Screenshot_2024-08-29_224502-removebg-preview.png" // Adjust the path as needed
            alt="Logo"
            className="w-auto h-16" // Increased the size of the logo
          />
        </div>
        
        {/* Center: Links */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
          <a href="#home" className="transition-colors duration-300 hover:text-red-500">Home</a>
          <a href="#project" className="transition-colors duration-300 hover:text-red-500">Project</a>
          <a href="#service" className="transition-colors duration-300 hover:text-red-500">Service</a>
          <a href="#skill" className="transition-colors duration-300 hover:text-red-500">Skill</a>
          <a href="#contact" className="transition-colors duration-300 hover:text-red-500">Contact</a>
        </div>

        {/* Right side: Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://github.com/Yathukrishnan" className="text-white transition-colors duration-300 hover:text-red-500">
            <i className="fab fa-github fa-2x"></i> {/* Font Awesome GitHub icon */}
          </a>
          <a href="https://x.com/yathu_ad063?t=aKh7frojQ66Wvqzka9XIFA&s=09" className="text-white transition-colors duration-300 hover:text-red-500">
            <i className="fab fa-twitter fa-2x"></i> {/* Font Awesome Twitter icon */}
          </a>
          <a href="https://www.instagram.com/invites/contact/?igsh=9xx38bmunevu&utm_content=d1rn9qr" className="text-white transition-colors duration-300 hover:text-red-500">
            <i className="fab fa-instagram fa-2x"></i> {/* Font Awesome Instagram icon */}
          </a>
          <a href="https://wa.me/qr/YXNUTYWULTAXG1" className="text-white transition-colors duration-300 hover:text-red-500">
            <i className="fab fa-whatsapp fa-2x"></i> {/* Font Awesome WhatsApp icon */}
          </a>
          <a href="mailto:yathukrish10@gmail.com" className="text-white transition-colors duration-300 hover:text-red-500">
            <i className="fas fa-envelope fa-2x"></i> {/* Font Awesome Gmail icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
