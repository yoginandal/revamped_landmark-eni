import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import IndianGuy from "../../assets/middleEastGuy.png";

// Service data structure
const serviceData = {
  "All Services": {
    subcategories: [],
  },
  "Visa Services": {
    subcategories: [
      "Tourist Visa",
      "Student Visa",
      "Work Visa",
      "Business Visa",
      "Transit Visa",
      "Medical Visa",
      "Dependent Visa",
      "Permanent Residence",
    ],
  },
  "Work & Employment": {
    subcategories: [
      "Job Placement",
      "CV Writing",
      "Interview Preparation",
      "Skill Assessment",
      "Work Permit Processing",
      "Employment Contracts",
    ],
  },
  "Study Abroad": {
    subcategories: [
      "University Selection",
      "Application Assistance",
      "Scholarship Guidance",
      "Language Proficiency Tests",
      "Student Accommodation",
      "Pre-Departure Briefing",
    ],
  },
  "Business Immigration": {
    subcategories: [
      "Investor Visa",
      "Entrepreneur Visa",
      "Business Setup Support",
      "Corporate Relocation",
      "Trade Licenses",
    ],
  },
  "Family Services": {
    subcategories: [
      "Family Sponsorship",
      "Spouse Visa",
      "Child Visa",
      "Parent Visa",
      "Family Reunion",
    ],
  },
};

export default function ServiceFinder() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSubcategoryDropdown, setShowSubcategoryDropdown] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    setShowCategoryDropdown(false);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowSubcategoryDropdown(false);
  };

  const currentSubcategories =
    serviceData[selectedCategory]?.subcategories || [];

  return (
    <section className="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Main Container - Square on Mobile, D-Shape on Desktop */}
        <div className="relative">
          {/* Container with Responsive Border Radius */}
          <div className="relative bg-white shadow-2xl rounded-2xl lg:rounded-none lg:rounded-r-[200px] xl:rounded-r-[300px]">
            {/* Red-Gray Gradient D-Shape Background (Desktop Only) */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-gray-700 rounded-r-[200px] xl:rounded-r-[300px]" />

            <div className="grid lg:grid-cols-2 items-stretch relative">
              {/* Left Side - Form Content */}
              <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 flex items-center overflow-visible">
                <div className="space-y-8 max-w-lg w-full">
                  {/* Header */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 font-medium">
                      Let us help you
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                      <span className="text-slate-900">Find your </span>
                      <span className="text-red-600">service</span>
                    </h2>
                  </div>

                  {/* Dropdown 1 - Service Category */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowCategoryDropdown(!showCategoryDropdown);
                        setShowSubcategoryDropdown(false);
                      }}
                      className="w-full px-6 py-4 bg-slate-100 rounded-lg text-left flex items-center justify-between hover:bg-slate-200 transition-colors"
                    >
                      <span
                        className={
                          selectedCategory
                            ? "text-slate-900 font-medium"
                            : "text-slate-500"
                        }
                      >
                        {selectedCategory || "All Services"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${
                          showCategoryDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Category Dropdown */}
                    {showCategoryDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-xl z-30 max-h-64 overflow-y-auto">
                        {Object.keys(serviceData).map((category) => (
                          <button
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className={`w-full px-6 py-3 text-left hover:bg-red-50 transition-colors ${
                              selectedCategory === category
                                ? "bg-red-600 text-white hover:bg-red-600"
                                : "text-slate-700"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dropdown 2 - Specific Service */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (currentSubcategories.length > 0) {
                          setShowSubcategoryDropdown(!showSubcategoryDropdown);
                          setShowCategoryDropdown(false);
                        }
                      }}
                      disabled={
                        !selectedCategory || currentSubcategories.length === 0
                      }
                      className={`w-full px-6 py-4 rounded-lg text-left flex items-center justify-between transition-colors ${
                        selectedCategory && currentSubcategories.length > 0
                          ? "bg-white border-2 border-slate-900 hover:bg-slate-50 cursor-pointer"
                          : "bg-slate-100 border-2 border-transparent opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <span
                        className={
                          selectedSubcategory
                            ? "text-slate-900 font-medium"
                            : "text-slate-500"
                        }
                      >
                        {selectedSubcategory || "Select specific service"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${
                          showSubcategoryDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Subcategory Dropdown */}
                    {showSubcategoryDropdown &&
                      currentSubcategories.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-xl z-30 max-h-80 overflow-y-auto">
                          {currentSubcategories.map((subcategory) => (
                            <button
                              key={subcategory}
                              onClick={() =>
                                handleSubcategorySelect(subcategory)
                              }
                              className={`w-full px-6 py-3 text-left hover:bg-red-50 transition-colors ${
                                selectedSubcategory === subcategory
                                  ? "bg-red-600 text-white hover:bg-red-600"
                                  : "text-slate-700"
                              }`}
                            >
                              {subcategory}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {/* Right Side - Professional Image (Desktop Only) */}
              <div className="relative hidden lg:block min-h-[300px] overflow-hidden rounded-r-[200px] xl:rounded-r-[300px]">
                <div className="absolute inset-0 flex items-end justify-start pl-4">
                  <img
                    src={IndianGuy}
                    alt="Professional traveler"
                    className="h-[520px] w-auto object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
