import React, { useEffect, useState } from 'react';
import client from '../contentful';

const Hero = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: 'parfumes', limit: 1 })
      .then((res) => {
        const item = res.items[0];
        if (item && item.fields) {
          let img = null;
          if (item.fields.photo) {
            img = item.fields.photo.fields.file.url;
          } else if (item.fields.image) {
            img = item.fields.image.fields?.file?.url || item.fields.image;
          }
          if (img) {
            const src = img.startsWith('http') ? img : `https:${img}`;
            setImageUrl(src);
          }
        }
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-purple-800 to-indigo-900" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <i className="fas fa-flask text-6xl text-gold mb-6" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Men Parfume
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Temukan aroma unik yang mencerminkan karaktermu. Elegan, tahan lama, dan berkelas.
        </p>
        <a href="#product-list" className="btn-primary text-lg">
          Shop Now
          <i className="fas fa-arrow-right ml-2" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#why" className="text-white/70 hover:text-white transition">
          <i className="fas fa-chevron-down text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;