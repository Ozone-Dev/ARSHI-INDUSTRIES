import React, { useState } from "react";

interface ImageItem {
  src: string;
  title: string;
}

const images: ImageItem[] = [
  { src: "https://th.bing.com/th/id/OIP.Adgtj6q3QTdqaAfN3ndEswHaE1?rs=1&pid=ImgDetMain", title: "Vintage Car" },
  { src: "https://th.bing.com/th/id/R.bcf212cb738220cb8d3b286a7bbcc9f0?rik=Vqi01YSd0YDB9A&pid=ImgRaw&r=0", title: "Blueberries" },
  { src: "https://th.bing.com/th/id/OIP.YeSN1YouGpMhvdd_oyUeAwHaE0?rs=1&pid=ImgDetMain", title: "Mountain View" },
  { src: "https://th.bing.com/th/id/OIP.Nto4QhjWGbZUXzYkebGBzwHaJQ?rs=1&pid=ImgDetMain", title: "Solar Panels" },
  { src: "https://th.bing.com/th/id/OIP.-9yUwV-2ou2CSg1j0_ee2wHaE8?rs=1&pid=ImgDetMain", title: "Ocean Waves" },
  { src: "https://th.bing.com/th/id/OIP.-9yUwV-2ou2CSg1j0_ee2wHaE8?rs=1&pid=ImgDetMain", title: "Ocean Waves" },
  { src: "https://th.bing.com/th/id/OIP.-9yUwV-2ou2CSg1j0_ee2wHaE8?rs=1&pid=ImgDetMain", title: "Ocean Waves" },
  { src: "https://th.bing.com/th/id/OIP.-9yUwV-2ou2CSg1j0_ee2wHaE8?rs=1&pid=ImgDetMain", title: "Ocean Waves" },
  // Add more images here for variety
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-300">
      <h2 className="text-center text-5xl font-bold text-gray-600 mb-10">
         Gallery
      </h2>
      {/* Masonry Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                index % 5 === 0 ? "row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
            onClick={prevImage}
          >
            ←
          </button>
          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="w-full h-auto object-contain rounded-lg"
            />
            <p className="text-center text-white mt-4 text-lg">
              {images[selectedImage].title}
            </p>
          </div>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
            onClick={nextImage}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
