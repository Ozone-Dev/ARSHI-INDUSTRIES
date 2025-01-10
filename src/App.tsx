import React from 'react';
import Navbar from './components/Navbar';

import { Hero } from './components/Hero';
import { About } from './components/sections/About';
import { Products } from './components/sections/Products';
import { Contact } from './components/sections/Contact';
import { Map } from './components/sections/Map';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;