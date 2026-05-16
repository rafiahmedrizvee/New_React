import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
        return (
                 <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">

      {/* Glow Effect */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="max-w-4xl text-center z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Build Modern Web Apps with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            React.js
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          Create fast, scalable, and beautiful user interfaces using modern frontend technologies like React, Tailwind CSS, and Framer Motion.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition font-semibold">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition font-semibold">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
        );
};

export default Hero;