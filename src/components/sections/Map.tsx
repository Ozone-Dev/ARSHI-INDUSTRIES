import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Global Presence"
          subtitle="Serving Asia from our base in Nepal"
        />
        
        
<div className="mt-12 bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
  <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
    <div className="h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3539.3046621916446!2d83.475157!3d27.490899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI5JzI3LjIiTiA4M8KwMjgnMzAuNiJF!5e0!3m2!1sen!2snp!4v1736509444919!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      />
      
    </div>
    
    <div className="flex flex-col justify-between p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-gray-500">Market Coverage</h3>
        <ul className="space-y-4 text-gray-700">
          {["Nepal", "India", "Bangladesh", "Sri Lanka", "And expanding across Asia"].map((country) => (
            <li key={country} className="flex items-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="text-lg">{country}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold mb-4 text-gray-500">Headquarters</h3>
        <p className="text-lg text-gray-700">
        Bhairahawa, SEZ(Special Economic Zone)<br />
          Nepal
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}