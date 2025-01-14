import React from "react";
import Navigation from "./components/Navigation.jsx";
import WelcomeHeader from "./components/WelcomeHeader.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import './assets/global.css'

const appStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative'
};

const appBackgroundStyle = {
  background: '#606060',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  zIndex: '-1'

};

function App() {

  return (
    <div style={appStyle}>
      <div style={appBackgroundStyle}></div>
        <Navigation/>
        <WelcomeHeader />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
