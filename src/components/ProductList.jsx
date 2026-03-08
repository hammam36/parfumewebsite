import React, { useEffect, useState } from 'react';
import client from '../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ProductList = () => {
  const [parfumes, setParfumes] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    client
      .getEntries({ content_type: 'parfumes' })
      .then((response) => {
        const items = response.items.map((item) => item.fields);
        const normalized = items.map((i) => ({
          ...i,
          image: i.photo || i.image || null
        }));
        setParfumes(normalized);
      })
      .catch((err) => console.error(err));
  }, []);

  const categories = ['All', ...new Set(parfumes.map((p) => p.category))];

  const renderDescription = (desc) => {
    if (!desc) return null;
    if (typeof desc === 'string') return desc;
    try {
      return documentToReactComponents(desc);
    } catch (e) {
      console.error('Failed to render rich text', e);
      return JSON.stringify(desc);
    }
  };

  const filtered =
    filter === 'All'
      ? parfumes
      : parfumes.filter((p) => p.category === filter);

  return (
    <section id="product-list" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
          Signature Scents
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Koleksi wewangian pilihan yang akan menemani setiap momen istimewa Anda.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === cat
                ? 'bg-gold text-dark shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.map((p, idx) => {
          let imgSrc = null;
          if (p.image) {
            if (typeof p.image === 'string') {
              imgSrc = p.image;
            } else if (p.image.fields?.file?.url) {
              const url = p.image.fields.file.url;
              imgSrc = url.startsWith('http') ? url : `https:${url}`;
            }
          }

          return (
            <div
              key={idx}
              className="card flex flex-col h-full group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <i className="fas fa-image text-4xl text-gray-500" />
                  </div>
                )}
                {/* Tags */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {p.featured && (
                    <span className="bg-gold text-dark text-xs font-semibold px-2 py-1 rounded-full">
                      {p.featured.toLowerCase() === 'yes' ? 'Unggulan' : p.featured}
                    </span>
                  )}
                  {p.category && (
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30">
                      {p.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <div className="text-gray-300 text-sm mb-4 flex-grow">
                {renderDescription(p.description)}
              </div>

              {/* Price & Buy */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-gold">${p.price}</span>
                <button
                  onClick={() => alert(`Added ${p.name} to cart`)}
                  className="w-12 h-12 rounded-full bg-gold text-dark hover:bg-yellow-400 transition-all transform hover:scale-110 flex items-center justify-center shadow-lg"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;