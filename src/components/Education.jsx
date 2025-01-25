import React from "react";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 bg-gradient-to-b from-gray-900 to-black text-center text-white transition-transform duration-1000 ${
        inView ? " opacity-100" : " opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
          <p>MCKV Institute Of Engineering (affiliated to MAKAUT), 2021 - Present</p>
          <p>Computer Science and Engineering (Data Science)</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Higher Secondary (10+2)</h3>
          <p>Vivekananda Academy, 2021</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Secondary</h3>
          <p>Gospel Home School, 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
