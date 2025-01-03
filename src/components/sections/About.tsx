import React from 'react';
import { Recycle, Leaf, Award, Factory, Users, Globe } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  const values = [
    {
      icon: Recycle,
      title: 'Sustainability',
      description: 'Leading Nepal\'s transition to sustainable manufacturing through eco-friendly practices and recycling initiatives.'
    },
    {
      icon: Leaf,
      title: 'Innovation',
      description: 'Pioneering green technologies in battery production and paint manufacturing to minimize environmental impact.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Maintaining the highest standards in product quality while adhering to international environmental guidelines.'
    }
  ];

  const achievements = [
    {
      icon: Factory,
      stat: '10+',
      label: 'Years of Excellence',
      description: 'Serving Nepal since 2010'
    },
    {
      icon: Users,
      stat: '1000+',
      label: 'Happy Clients',
      description: 'Across various industries'
    },
    {
      icon: Globe,
      stat: '5+',
      label: 'Countries Served',
      description: 'International presence'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Aarshi Industries"
          subtitle="Leading Nepal's Green Manufacturing Revolution"
        />
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative">
            <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover-lift hover-glow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, Aarshi Industries has been at the forefront of sustainable manufacturing in Nepal. 
                Our journey began with a simple mission: to create eco-friendly solutions for everyday industrial needs.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Today, we're proud to be Nepal's leading manufacturer of batteries, paints, and lead seals, 
                all produced with our commitment to environmental stewardship.
              </p>
              <div className="mt-6 bg-green-50/50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Our Certifications</h4>
                <ul className="list-disc list-inside text-green-700 space-y-1">
                  <li>ISO 9001:2015 Certified</li>
                  <li>Nepal Standard (NS) Mark</li>
                  <li>Green Industry Certification</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-500 hover:scale-105 hover-glow card-shine"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <value.icon className="h-8 w-8 text-green-500 mb-3 transform transition-transform duration-300 group-hover:rotate-12" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center hover-lift hover-glow"
            >
              <item.icon className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{item.label}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}