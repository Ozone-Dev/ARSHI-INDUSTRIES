import React from 'react';
import { Battery, Droplets, Lock, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { ProductCard } from '../ui/ProductCard';

export function Products() {
  const products = [
    {
      icon: Battery,
      title: 'Eco-Friendly Batteries',
      description: 'Sustainable battery solutions with advanced recycling technology.',
      features: ['Long-lasting', 'Recyclable', 'Low environmental impact'],
      image: 'https://image.makewebeasy.net/makeweb/r_1200x0/ZffKfjIbh/content/AGM_AGM_LN4_[Top_.jpg'
    },
    {
      icon: Droplets,
      title: 'Leads Solutions',
      description: 'Eco-friendly, Low-VOC Products for a Healthier Environment',
      features: ['Non-toxic', 'Durable finish', 'Extensive Color Selection'],
      image: 'https://as2.ftcdn.net/v2/jpg/03/14/49/35/1000_F_314493559_oXluee7FlgxIuU74nPkKgkblFY9DkRkO.jpg'
    },
    {
      icon: Lock,
      title: 'Security Seals',
      description: 'Tamper-evident seals made from recycled materials.',
      features: ['High security', 'Eco-friendly', 'Custom options'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80'
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