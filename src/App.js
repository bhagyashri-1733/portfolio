import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2025 software developer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
