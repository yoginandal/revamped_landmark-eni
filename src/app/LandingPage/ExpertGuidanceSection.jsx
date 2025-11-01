import React, { useState, useEffect } from "react";

// Array of images for the slider
const sliderImages = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
];

export default function ExpertGuidanceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality for the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Static Text Content */}
          <div className="space-y-6 text-left lg:pr-8">
            <p className="text-lg font-medium text-gray-700 drop-shadow-sm">
              Delivering
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-tight drop-shadow-sm">
              Expert
              <br />
              Guidance<span className="text-red-600">.</span>
            </h2>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-red-800">
                We have the{" "}
                <span className="text-gray-900">Best Consultants</span>
              </h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Landmark ENI's team of immigration experts are highly
                experienced professionals dedicated to making your global
                mobility journey seamless and successful. Our consultants hold
                advanced certifications and have extensive knowledge of
                immigration laws across multiple countries. With decades of
                combined experience, we provide personalized guidance tailored
                to your unique needs, ensuring the highest success rates in visa
                approvals and job placements.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Image Slider with Asymmetrical Border */}
          <div className="relative w-full max-w-lg mx-auto h-auto">
            {/* The asymmetrical border with gradient background */}
            <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-gray-700 p-3">
              <div className="bg-white p-3">
                {/* The image container with top padding */}
                <div className="relative w-full h-[400px] sm:h-[450px] overflow-hidden pt-8">
                  {sliderImages.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Immigration consultation ${index + 1}`}
                        className="object-cover w-full h-full grayscale"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider dots */}
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-red-700"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
