import './App.css';
import { motion } from 'framer-motion';

import {
  Hero,
  About,
  OurValues,
  Services,
  DigitalSolutions,
  Contact,
} from './containers';
import { Navbar, Footer, SmoothScroll } from './components';

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <About />
      <OurValues />
      <Services />
      <DigitalSolutions />
      <Contact />

      {/* Footer and Navbar */}
      <Navbar />
      <Footer />
    </SmoothScroll>
  );
}

export default App;
