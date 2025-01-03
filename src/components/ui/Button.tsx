import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-4 py-2 border border-transparent rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    secondary: 'bg-white hover:bg-gray-50 text-green-600 focus:ring-green-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}