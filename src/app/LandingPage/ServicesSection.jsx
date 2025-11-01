import React from "react";
import { ArrowRight } from "lucide-react";

// Data for Landmark ENI services
const services = [
  {
    id: 1,
    name: "Visa Processing Services",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Job Placement & Recruitment",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Passport Assistance",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Study Abroad Consultancy",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Business Immigration",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Family Sponsorship",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Citizenship Services",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Relocation Support",
    image:
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2069&auto=format&fit=crop",
  },
];

const ServiceCard = ({ name, image }) => (
  <div className="flex-shrink-0 w-[320px] rounded-lg overflow-hidden shadow-2xl bg-slate-900">
    <div className="relative h-56 w-full">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white h-16">{name}</h3>
      <a
        href="#"
        className="group inline-flex items-center text-sm font-semibold text-red-400 hover:text-red-500 transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

export default function ServicesSection() {
  const extendedServices = [...services, ...services]; // Duplicate for seamless loop

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Top Content Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Landmark ENI offers a comprehensive suite of immigration and visa
            services designed to make your global mobility journey seamless and
            successful. From visa processing and job placement to passport
            assistance and study abroad consultancy, our expert team provides
            personalized support at every step. With a proven track record and a
            network spanning over 70 countries, we are your trusted partner in
            achieving your international aspirations.
          </p>
        </div>

        {/* Infinite Slider */}
        <div className="overflow-hidden relative w-full">
          <div className="flex space-x-8 animate-scroll">
            {extendedServices.map((service, index) => (
              <ServiceCard
                key={`${service.id}-${index}`}
                name={service.name}
                image={service.image}
              />
            ))}
          </div>
          {/* Fade effect on the sides */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Keyframes for the scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${services.length * (320 + 32)}px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
