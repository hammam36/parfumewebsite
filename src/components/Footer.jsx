import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark/80 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Men Parfume. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Dibuat dengan <i className="fas fa-heart text-red-500" /> untuk para pria berkelas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;