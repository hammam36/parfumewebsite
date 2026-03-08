import React from 'react';

const whatsappNumber = '086660987123';
const message = encodeURIComponent('Saya tertarik dengan parfum Anda.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <i className="fas fa-wind text-gold mr-3" />
          Ready to smell different?
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Parfum yang tepat bisa mengubah suasana hati, membangun kepercayaan diri, dan membuat setiap momen terasa istimewa. Apakah Anda siap membawa keunikan aroma ke dalam hidup Anda?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg inline-flex items-center gap-3"
        >
          <i className="fab fa-whatsapp text-2xl" />
          Beli via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;