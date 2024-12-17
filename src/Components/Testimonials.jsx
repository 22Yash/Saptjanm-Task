import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "This platform has completely transformed the way I work. Highly recommend it!",
    role: "Marketing Specialist",
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback:
      "Amazing experience! The features are intuitive, and the support is fantastic.",
    role: "Software Engineer",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback: "It made my daily tasks so much easier. I'm a fan!",
    role: "Project Manager",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation logic
    const cards = sectionRef.current.querySelectorAll(".testimonial-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-16 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Hear from our satisfied users who have transformed their experiences
          with our platform.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              {/* User Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-gray-300"
              />
              {/* User Name */}
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              {/* Role */}
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              {/* Feedback */}
              <p className="text-gray-600 mt-4 text-sm text-center">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
