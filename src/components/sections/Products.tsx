import React from 'react';
import { Battery, Droplets, Lock, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { ProductCard } from '../ui/ProductCard';

export function Products() {
  const products = [
    {
      icon: Battery,
      title: 'Battery Recycling - Lead',
      description: 'Sustainable battery solutions with advanced recycling technology.',
      features: ['Long-lasting', 'Recyclable', 'Low environmental impact'],
      image: 'https://www.gravitaindia.com/Upload/Images/thumbnail/Battery-Recycling-Lead.webp'
    },
    {
      icon: Droplets,
      title: 'Recycled Plastic Granules',
      
        "description": "Eco-friendly, sustainable materials for a greener planet",
        "features": ["Non-toxic and safe", "Durable and long-lasting", "Wide range of colors and applications"],
      
      
      image: 'https://www.gravitaindia.com/Upload/Images/thumbnail/plastic-granules-mobile-v2.webp'
    },
    {
      icon: Lock,
      title: 'Remelted lead (RML)',
      "description": "High-quality remelted lead (RML) produced from recycled lead materials for industrial use.",
  "features": ["Eco-friendly and sustainable", "High purity and consistent quality", "Customizable ingot sizes"],
      image: 'https://www.gravitaindia.com/Upload/Images/thumbnail/Aluminium-Recycling.webp'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Products"
          subtitle="Innovative Solutions for a Sustainable Future"
        />
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}