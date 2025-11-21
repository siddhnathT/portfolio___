import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CareerGrowth from './components/CareerGrowth';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-dark min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* Fixed Animated Background */}
      <BackgroundEffect />

      {/* Overlay gradient for content readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-dark/50 to-dark/80"></div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <CareerGrowth />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;