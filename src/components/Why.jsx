import React from 'react';

const benefits = [
  {
    icon: 'fa-leaf',
    title: 'Natural Ingredients',
    desc: 'Ekstrak alami premium untuk pengalaman aroma yang sehat.'
  },
  {
    icon: 'fa-star',
    title: 'Unique Profiles',
    desc: 'Setiap aroma dirancang untuk menonjolkan karakter berani.'
  },
  {
    icon: 'fa-clock',
    title: 'Long-lasting',
    desc: 'Aroma bertahan sepanjang hari tanpa perlu semprot ulang.'
  },
  {
    icon: 'fa-hand-holding-droplet',
    title: 'Eco-friendly',
    desc: 'Bahan ramah lingkungan dan cruelty-free.'
  },
  {
    icon: 'fa-user-shield',
    title: 'Confidence Boost',
    desc: 'Meningkatkan rasa percaya diri di setiap kesempatan.'
  }
];

const Why = () => {
  return (
    <section id="why" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
          Mengapa Memilih Kami?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Kami menghadirkan wewangian yang tidak hanya wangi, tapi juga membangun kepercayaan diri dan kepribadian.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="card group hover:bg-white/20 transition-all duration-300"
          >
            <i className={`fas ${b.icon} text-4xl text-gold mb-4 group-hover:scale-110 transition-transform`} />
            <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-300">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;