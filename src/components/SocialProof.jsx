import React from 'react';

const testimonials = [
  {
    quote: "The scent is unique and lasts all day. I've never gotten so many compliments!",
    author: "Alex",
    role: "Pengusaha Muda"
  },
  {
    quote: "Men Parfume really helped me express who I am. Highly recommend.",
    author: "Jamal",
    role: "Desainer"
  },
  {
    quote: "Aromanya elegan dan tahan lama. Sekarang jadi koleksi favorit saya.",
    author: "Rizky",
    role: "Content Creator"
  }
];

const SocialProof = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
          Apa Kata Mereka?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ribuan pria telah menemukan aroma signature mereka. Bergabunglah sekarang!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="card relative">
            <i className="fas fa-quote-left text-4xl text-gold/30 absolute top-4 left-4" />
            <div className="relative z-10 pt-8">
              <p className="text-gray-200 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-yellow-300 flex items-center justify-center text-dark font-bold text-xl">
                  {t.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;