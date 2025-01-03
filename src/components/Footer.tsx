import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} Aarshi Industries Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Pioneering sustainable manufacturing solutions across Asia since 2010.
          </p>
        </div>
      </div>
    </footer>
  );
}