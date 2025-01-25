import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
