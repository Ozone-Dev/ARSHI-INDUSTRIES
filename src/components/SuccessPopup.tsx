import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white/80 backdrop-blur-lg rounded-xl p-6 w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center">
          <CheckCircle className="h-12 w-12 text-emerald-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Successful!</h3>
          <p className="text-center text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;