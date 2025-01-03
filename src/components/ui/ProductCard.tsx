import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { icon: Icon, title, description, features, image } = product;

  return (
    <div className="group relative bg-white/30 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover-lift card-shine hover-glow">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="h-6 w-6 text-green-500 mr-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li 
              key={feature} 
              className="flex items-center text-sm text-gray-600 transform transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <ArrowRight className="h-4 w-4 text-green-500 mr-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:scale-105 hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}