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
import { Navbar, Footer } from './components';

function App() {
  return (
    <motion.div>
      <Hero />
      <About />
      <OurValues />
      <Services />
      <DigitalSolutions />
      <Contact />

      {/* Footer and Navbar */}
      <Navbar />
      <Footer />
    </motion.div>
  );
}

export default App;
