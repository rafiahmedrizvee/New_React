import React from 'react';

const About = () => {
        return (
                 <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-4">
            About Our Company
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a modern digital agency focused on building high-quality
            web applications, mobile solutions, and scalable software products.
            Our goal is to deliver performance-driven and user-friendly experiences.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With a team of experienced developers and designers, we turn ideas
            into powerful digital solutions that help businesses grow faster.
          </p>

          <div className="flex gap-4">
            <div className="p-4 bg-base-200 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-primary">5+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>

            <div className="p-4 bg-base-200 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-primary">100+</h3>
              <p className="text-sm text-gray-500">Projects Done</p>
            </div>

            <div className="p-4 bg-base-200 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-primary">50+</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="about"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
        );
};

export default About;