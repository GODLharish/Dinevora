import { useState } from "react";
import logo from "../assets/res-n.png";
import { LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const smoothScroll = (targetID) => {
    const targetElement = document.getElementById(targetID);
    if (!targetElement) return;

    const navbarOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    let start = window.scrollY;
    let distance = offsetPosition - start;
    let startTime = null;

    const duration = 1000; // Adjust duration (1s for smooth effect)
    const easingFunction = (t) => t * (2 - t); // Smooth ease-out effect

    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1);
      let easeProgress = easingFunction(progress);

      window.scrollTo(0, start + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      } else {
        setIsMobileMenuOpen(false); // Close mobile menu after scroll completes
      }
    }

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="logo" width={80} height={22} />

        {/* Desktop Links */}
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <button
              key={index}
              className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
              onClick={() => smoothScroll(link.targetId)}
            >
              {link.text}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <button
              key={index}
              className="block p-4 uppercase tracking-tighter"
              onClick={() => smoothScroll(link.targetId)}
            >
              {link.text}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
