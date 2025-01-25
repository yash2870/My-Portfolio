import React from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: project1Ref, inView: project1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: project2Ref, inView: project2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: project3Ref, inView: project3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="projects"
      className="py-20 bg-black text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="space-y-8">
        {/* Project 1 */}
        <div
          ref={project1Ref}
          className={`p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ${project1InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h3 className="text-xl font-semibold mb-2">Online Health Diagnosis System</h3>
          <p className="mb-4 text-justify">
            A secure and user-friendly platform that facilitates health profile management, AI-driven symptom assessments, and appointment
            booking. Integrated features include personalized health records, encrypted authentication via JWT tokens and Google OAuth, and AI models for diagnosing diabetes, heart disease, PCOS, and COVID- 19. Users can store medical reports, book doctor appointments, and
            generate QR-based health cards for emergency use.The platform
            utilizes React.js , Node.js , MongoDB , and machine learning
            algorithms to provide reliable health services. Data privacy and
            security are ensured through encryption and robust authentication protocols.
          </p>
          <a
            href="https://github.com/yash2870/Online-Health-Diagonosis-System/tree/master"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg"
          >
            View Source Code
          </a>
        </div>

        {/* Project 2 */}
        <div
          ref={project2Ref}
          className={`p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ${project2InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h3 className="text-xl font-semibold mb-2">Billing and Stock Management System: Bill Sahayak</h3>
          <p className="mb-4 text-justify">
            Developed a full-stack application, Bill Sahayak , using the MERN
            stack (MongoDB, Express.js, React.js, Node.js) for seamless billing
            and stock management. This platform enables businesses to manage inventory, generate accurate bills, and track stock details with minimal effort. Key features include user authentication via
            JWT, the ability to add, edit, and delete stock items, automatic bill
            generation with GST calculations, and the option to view and search
            past bills. Implemented responsive UI with Tailwind CSS for an
            intuitive user experience.

          </p>
          <a
            href="https://github.com/yash2870/Bill-and-Stock-Management-Application"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg"
          >
            View Source Code
          </a>
        </div>

        {/* Project 3 */}
        <div
          ref={project3Ref}
          className={`p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-1000 ${project3InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h3 className="text-xl font-semibold mb-2">Stock Trend Prediction</h3>
          <p className="mb-4 text-justify">
            Developed a stock price prediction model using Python and deep
            learning techniques, leveraging LSTM networks for time series
            forecasting. Implemented data preprocessing, feature scaling, and
            visualizations to analyze historical stock trends. Optimized model
            performance using metrics like MAE and MAPE and integrated real- time predictions with user-defined inputs. Created a user-friendly
            system to forecast stock prices and visualize prediction accuracy against actual values.
          </p>
          <a
            href="https://colab.research.google.com/drive/1Eum0ZxXCPHiMptT65KJqoDasB39C49Mf?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg"
          >
            View Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
