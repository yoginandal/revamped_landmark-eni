import React from "react";
import { Quote, ArrowRight } from "lucide-react";

// Data for the feature cards
const features = [
  {
    title: "Global Reach",
    imageUrl:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Client Success",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Expert Team",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Corporate Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];

// Reusable Card Component
const FeatureCard = ({ title, imageUrl }) => {
  return (
    <div className="group relative w-full h-[450px] overflow-hidden">
      {/* Image fills the entire container */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Text content positioned at the bottom */}
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-red-400 group-hover:text-red-500 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default function ExperienceLandmarkSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Top Section: Heading and Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex items-center gap-6">
            <div className="relative flex-shrink-0 w-28 h-28">
              <div className="relative w-full h-full flex items-center justify-center">
                <Quote
                  className="w-full h-full text-red-600 transform -scale-x-100"
                  strokeWidth={1.2}
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Experience
              <br />
              Landmark ENI
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Landmark ENI represents excellence in immigration consultancy and
            global mobility solutions. We empower individuals and businesses to
            achieve their international aspirations through expert guidance,
            comprehensive services, and unwavering commitment to success. Our
            team embodies the values of professionalism, integrity, and
            innovation, ensuring seamless immigration experiences across visa
            processing, job placement, and corporate relocation.
          </p>
        </div>

        {/* Bottom Section: Feature Cards Grid with NO GAPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 p-0">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
