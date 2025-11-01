import React from "react";
import { Quote } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      value: "4,000+",
      label: "Visas Processed",
      sublabel: "Successfully Approved",
    },
    { value: "70+", label: "Global Offices", sublabel: "Countries Worldwide" },
    { value: "30+", label: "Years Experience", sublabel: "Industry Expertise" },
    { value: "95%", label: "Success Rate", sublabel: "Client Satisfaction" },
  ];

  return (
    <section className="relative w-full bg-slate-900 text-white py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-red-500">Landmark ENI</span>
                <br />
                <span className="text-white">Immigration Services</span>
              </h2>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                A trusted partner in global mobility with a proven track record
                in visa processing, job placement, and immigration consultancy.
                Landmark ENI is committed to delivering comprehensive corporate
                solutions across visa processing, government relations,
                recruitment services, and more. With strategic offices and a
                network spanning over 70 countries, we provide expert guidance
                and seamless support for individuals and businesses navigating
                international immigration.
              </p>
            </div>
          </div>

          {/* Right Content - Quote */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-red-500/20 text-8xl md:text-9xl font-serif">
              <Quote
                className="w-16 h-16 md:w-24 md:h-24"
                fill="currentColor"
              />
            </div>

            <div className="relative bg-gradient-to-br from-red-900/30 to-slate-800/30 backdrop-blur-sm border-2 border-red-500/30 p-6 md:p-8 shadow-2xl rounded-lg">
              <blockquote className="space-y-4">
                <p className="text-base md:text-lg lg:text-xl text-red-400 font-semibold leading-relaxed italic">
                  &quot;Your Gateway to Global Opportunities - At Landmark ENI,
                  we transform your immigration journey with expert guidance,
                  comprehensive services, and unwavering commitment to your
                  success.&quot;
                </p>

                <footer className="border-t border-slate-700 pt-4">
                  <cite className="not-italic">
                    <div className="text-sm md:text-base font-bold text-white">
                      Landmark ENI Leadership
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      Founder&apos;s Vision
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </div>

            <div className="absolute -bottom-6 -right-6 text-gray-500/20 text-8xl md:text-9xl font-serif rotate-180">
              <Quote
                className="w-16 h-16 md:w-24 md:h-24"
                fill="currentColor"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid - Desktop (Horizontally Aligned at Bottom) */}
        <div className="hidden md:grid grid-cols-4 gap-4 pt-12 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-red-500/50 transition-all text-center">
                <div className="text-2xl lg:text-3xl font-extrabold text-red-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm font-semibold text-white leading-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid - Mobile */}
        <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-3 hover:border-red-500/50 transition-all">
                <div className="text-xl font-extrabold text-red-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white leading-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
