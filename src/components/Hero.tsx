import React, { useEffect, useRef } from 'react';
import { Battery, Droplets, Lock } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * Number(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center parallax" data-speed="0.3">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-4xl float-animation">
            <span className="block">Eco-Conscious Solutions for</span>
            <span className="block text-green-600">A Sustainable Future</span>
          </h1>
          
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-sm md:max-w-3xl parallax" data-speed="0.5">
            Leading manufacturer in Nepal specializing in batteries, paints, and lead seals.
            Committed to environmental sustainability and innovation.
          </p>
          
          <div className="mt-10 flex justify-center space-x-6">
            <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-small rounded-md text-white bg-green-600 hover:bg-green-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </a>
            <a href="#about" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: Battery, title: 'Battery Solutions', description: 'Eco-friendly battery manufacturing and recycling' },
            { icon: Droplets, title: 'Paint Products', description: 'High-quality, environmentally conscious paints' },
            { icon: Lock, title: 'Lead Seals', description: 'Secure and sustainable sealing solutions' },
          ].map(( feature, index) => (
            <div 
              key={feature.title} 
              className="relative group parallax hover-lift card-shine"
              data-speed={0.1 * (index + 1)}
            >
              <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform transition-transform group-hover:scale-105" />
              <div className="relative p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20">
                <feature.icon className="h-8 w-8 text-green-500 mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
                <h3 className="text-lg font-medium text-gray-600">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}