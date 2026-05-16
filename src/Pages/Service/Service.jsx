import React from 'react';

const Service = () => {
        const services = [
  {
    title: "Web Development",
    desc: "Modern, fast and responsive websites using React, Next.js and Node.js.",
  },
  {
    title: "UI/UX Design",
    desc: "Clean and user-friendly interface design for better user experience.",
  },
  {
    title: "Backend Development",
    desc: "Scalable APIs, secure authentication and database architecture.",
  },
  {
    title: "E-commerce Solutions",
    desc: "Full-stack online store with payment integration and admin panel.",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications using modern frameworks.",
  },
  {
    title: "SEO Optimization",
    desc: "Improve website ranking and performance on search engines.",
  },
];

        return (
               <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-primary mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 mb-10">
          We provide complete digital solutions for modern businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        );
};

export default Service;