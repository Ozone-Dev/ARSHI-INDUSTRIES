import React, { useState } from "react";

interface ImageItem {
  src: string;
  title: string;
}

const images: ImageItem[] = [
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img1.JPG", title: "Vintage Car" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img11.JPG", title: "Blueberries" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img12.JPG", title: "Mountain View" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img13.JPG", title: "Solar Panels" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img3.JPG", title: "Ocean Waves" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img4.JPG", title: "Ocean Waves" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img6.JPG", title: "Ocean Waves" },
  { src: "https://github.com/Ozone-Dev/AARSHI-INDUSTRIES/blob/main/src/components/img/img7.JPG", title: "Ocean Waves" },
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
    <section id="gallery" className="py-16 bg-gradient-to-b from-gray-100 to-gray-300">
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
