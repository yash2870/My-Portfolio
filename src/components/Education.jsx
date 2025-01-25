import React from "react";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 bg-gradient-to-b from-gray-900 to-black text-center text-white transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        {/* Bachelor of Technology */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg ">
          <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
          <p className="mb-2">
            MCKV Institute Of Engineering (affiliated to MAKAUT), 2021 - Present
          </p>
          <p>Computer Science and Engineering (Data Science)</p>
          <p>Grade:86.3%</p>
        </div>

        {/* Higher Secondary (10+2) */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg ">
          <h3 className="text-xl font-semibold mb-2">Higher Secondary (10+2)</h3>
          <p>Vivekananda Academy, 2021</p>
          <p>Grade:81.17%</p>
        </div>

        {/* Secondary */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Secondary</h3>
          <p>Gospel Home School, 2019</p>
          <p>Grade:90.8%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
