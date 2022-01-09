// == Import npm
import React, { useState } from 'react';

// == Import: local
import Header from 'src/components/Header';
import Presentation from 'src/components/Presentation';
import Moi from 'src/components/Moi';
import Portfolio from 'src/components/Portfolio';
import Experience from 'src/components/Experience';
import Skills from 'src/components/Skills';
import Carte from 'src/components/Carte';
import Contact from 'src/components/Contact';
import './app.scss';

// == Composant
export default function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="app">
      <Header />
      <Presentation />
      <Moi />
      <Portfolio />
      <Experience />
      <Skills />
      <Carte
        open={open}
        onclickCloseModal={toggleOpen}
      />
      <Contact />
    </div>
  );
}

// // == Export
// export default App;
