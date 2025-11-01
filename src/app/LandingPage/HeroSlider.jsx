import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

// --- Enhanced slide data with better imagery ---
const slides = [
  {
    title: "Your Gateway to Middle East Careers",
    subtitle:
      "Connecting Indian professionals with premier opportunities across UAE, Saudi Arabia, Qatar, and beyond.",
    highlight: "10,000+ Success Stories",
    ctaText: "Start Your Journey",
    bgImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000&auto=format&fit=crop&q=80",
  },
  {
    title: "Seamless Immigration Excellence",
    subtitle:
      "Expert visa processing, work permits, and documentation support. We handle every detail of your Middle East journey.",
    highlight: "95% Approval Rate",
    ctaText: "Explore Services",
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&auto=format&fit=crop&q=80",
  },
  {
    title: "Trusted Immigration Partner",
    subtitle:
      "From application to arrival, our 30+ years of expertise ensures a seamless transition to your dream career.",
    highlight: "30+ Years Experience",
    ctaText: "Get Started Today",
    bgImage:
      "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=2000&auto=format&fit=crop&q=80",
  },
];

// Floating particle animation component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, Math.random() * -100 - 50],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

export default function ImmigrationHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
        />
      </AnimatePresence>

      {/* Gradient Overlay - Enhanced with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Highlight Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 backdrop-blur-md border border-red-500/30 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-red-400" />
                <span className="text-red-200 font-semibold text-sm">
                  {slides[currentSlide].highlight}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
              >
                {slides[currentSlide].ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Enhanced Design */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:left-12 top-1/2 z-20 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
      >
        <ChevronLeft className="w-7 h-7 text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 lg:right-12 top-1/2 z-20 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
      >
        <ChevronRight className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Slide Indicators - Premium Design */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-xl border border-white/10 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
          >
            <div
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                index === currentSlide
                  ? "w-12 bg-white"
                  : "w-2 bg-white/40 group-hover:bg-white/60 group-hover:w-4"
              )}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
