import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className={`h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-center text-white transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"
        }`}
    >
      <img
        src="My photo.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Yash Mukhopadhyay</h1>
      <p className="text-gray-300 max-w-xl text-justify">
        I am a passionate Software developer and Data Analyst. I aspire to
        build responsive software solutions. I am a tech enthusiast and I am
        keen to learn new skills every day.My skill set includes:
      </p>
      <div className="p-4 mt-2 rounded-lg max-w-xl mx-auto">
        <div className="flex flex-wrap justify-start gap-2">
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">C</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">Java</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">Python</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">HTML</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">CSS</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">JavaScript</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">React.js</span>
          <span className="bg-gray-900 text-teal-500 p-4 rounded-lg">SQL</span>
        </div>
      </div>

    </section>
  );
};

export default Home;
