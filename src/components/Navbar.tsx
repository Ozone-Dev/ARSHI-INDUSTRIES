import React, { useState } from 'react';
import { Menu, X, Facebook, MessageCircle } from 'lucide-react';
import AppointmentModal from './AppointmentModaL';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Offerings', href: '#Offerings' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-emerald-500 font-bold leading-[15px] text-xl mt-2 flex items-center gap-0">
                <img src=" /AARSHI-INDUSTRIES/img/logo.png" alt="AIPL Logo" className="h-[6rem] w-[6rem] mt-5" />
                <span className='font-serif font-thin'>Aarshi Industries <br/>
               {/* <span className='text-sm text-stone-400'> ReUse ReCycle GoGreen</span> */}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-emerald-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-small hover:bg-emerald-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-emerald-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full text-left text-gray-500 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
