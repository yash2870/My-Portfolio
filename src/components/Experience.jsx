import React from "react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  const { ref: csrboxRef, inView: csrboxInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: oasisRef, inView: oasisInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ardentRef, inView: ardentInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
    id="experience"
    ref={ref}
      className={`py-20 bg-gradient-to-b from-gray-900 to-black text-center text-white transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
     
    >
      <h2 className="text-3xl font-bold mb-8">Internships & Experience</h2>
      <div className="space-y-8">
        {/* CSRBOX */}
        <div
          ref={csrboxRef}
          className={`p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ${csrboxInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h3 className="text-xl font-semibold">CSRBOX: DATA ANALYTICS INTERNSHIP</h3>
          <p className="italic mb-4">IBM Skillsbuild, 06/2023 - 07/2023</p>
          <p className="mb-4 text-justify sm:text-center">
            Worked in a team to develop a new machine learning model
            to predict Stocks performances in future
            Developed my professional skills by attending training
            courses on data science and machine learning.
          </p>
          <a
            href="https://drive.google.com/file/d/1ZTApbTaD8GPVzft3unr-Fql_0a-91cKR/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg"
          >
            View Certificate
          </a>
        </div>

        {/* OASIS INFOBYTE */}
        <div
          ref={oasisRef}
          className={`p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ${oasisInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h3 className="text-xl font-semibold">OASIS INFOBYTE</h3>
          <p className="italic mb-4">Web Designing and Development, 03/2024 - 04/2024</p>
          <p className="mb-4 text-justify sm:text-center">
            Build three projects using html,css and javascripts
            It includes a landing page, personal portfolio, dynamic
            wather converter application.
          </p>
          <a
            href="https://drive.google.com/file/d/1gjaLwGanrvBnWBi-HB2Qg_5WPVqpx-Zu/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg"
          >
            View Certificate
          </a>
        </div>

        {/* Ardent Computech */}
        <div
          ref={ardentRef}
          className={`p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ${ardentInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h3 className="text-xl font-semibold">Ardent Computech</h3>
          <p className="italic mb-4">Full Stack Web Development, 07/2024 - 08/2024</p>
          <p className="mb-4 text-justify sm:text-center">
            Built a Online Health Diagnosis System using MERN
            technology. A secure and user-friendly platform that facilitates health
            profile management, AI-driven symptom assessments, and
            appointment booking.
          </p>
          <a
            href="https://drive.google.com/file/d/1pBX2lxrAYQSduDiG4NMh_IbT2JHQuW7j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
