import React from 'react'
import Header from "./companents/Header"
import Hero from './companents/Hero';
import About from './companents/About';
import Projects from './companents/Projects';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <h2>Salam! Portfolioya xos geldiniz!</h2>
    </div>
  );
}

export default App;