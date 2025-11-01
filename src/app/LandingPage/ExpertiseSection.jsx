import React from "react";
import {
  FileCheck,
  Globe,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const serviceCards = [
  {
    id: 1,
    icon: FileCheck,
    title: "Visa Processing Excellence",
    link: "#",
  },
  {
    id: 2,
    icon: Globe,
    title: "Global Network & Reach",
    link: "#",
  },
  {
    id: 3,
    icon: Building2,
    title: "Corporate Solutions",
    link: "#",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Success Stories",
    link: "#",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="relative py-16 md:py-20 bg-black overflow-hidden">
      {/* Dotted Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Two Large Circular Arc Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[120vw] max-w-[1400px] h-[120vw] max-h-[1400px] rounded-full border-2 border-dotted border-white/15"
          style={{ bottom: "-60%" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[140vw] max-w-[1700px] h-[140vw] max-h-[1700px] rounded-full border-2 border-dotted border-white/15"
          style={{ bottom: "-55%" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Centered container for the Shield/D Shape and Overlapping Text */}
          <div className="relative mb-8 h-[300px] flex justify-center items-center">
            {/* The visual block (shape and text) container */}
            <div className="relative w-[350px] md:w-[450px] lg:w-[550px]">
              {/* D-Shape Background */}
              <div
                className="absolute left-0 top-0 bg-gradient-to-br from-red-600 to-gray-700 shadow-2xl"
                style={{
                  borderRadius: "8px 8px 50% 50% / 8px 8px 50% 50%",
                  width: "180px",
                  height: "200px",
                  zIndex: 0,
                }}
              />

              {/* Text overlaying the D-shape */}
              <div className="relative z-10 w-[350px] md:w-[450px] lg:w-[550px] pt-8 pl-4 md:pl-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  <span className="block text-left pl-12 md:pl-20 font-medium lg:pl-[5.8rem]">
                    Our
                  </span>
                  <span className="block text-left font-bold">Expertise &</span>
                  <span className="block text-left pl-12 md:pl-20 lg:pl-[5.8rem] font-bold">
                    Solutions
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              Excellence in immigration services is at the heart of everything
              we do at Landmark ENI. Our team of certified immigration
              consultants and industry experts deliver comprehensive solutions
              across visa processing, job placement, and corporate relocation.
              We combine decades of experience with cutting-edge technology to
              provide seamless, efficient, and personalized service. Our
              commitment to client success drives us to maintain a 95% approval
              rate and build lasting partnerships with individuals and
              organizations worldwide.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-red-400 transition-colors"
            >
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.link}
                className="group relative bg-black border-2 border-white/30 rounded-xl p-8 hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-4 min-h-[56px] leading-tight">
                  {card.title}
                </h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowRight className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
