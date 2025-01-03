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
      image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Droplets,
      title: 'Green Paint Solutions',
      description: 'Low-VOC paints for a healthier environment.',
      features: ['Non-toxic', 'Durable finish', 'Wide color range'],
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
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
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}