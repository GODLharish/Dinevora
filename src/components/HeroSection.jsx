import video from "../assets/hero.mp4";
import logo from "../assets/D.png";
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        ></video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-screen flex-col items-center justify-end pb-20">
        <p className="p-4 text-lg tracking-tighter text-white uppercase">Take it Cheesy</p>
      </div>
    </section>
  );
};

export default HeroSection;
