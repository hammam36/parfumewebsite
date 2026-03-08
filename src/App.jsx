import React from 'react';
import Hero from './components/Hero';
import Why from './components/Why';
import ProductList from './components/ProductList';
import CTA from './components/CTA';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Why />
      <ProductList />
      <CTA />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;