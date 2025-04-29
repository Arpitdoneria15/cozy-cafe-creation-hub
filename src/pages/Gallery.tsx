
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Cafe",
    alt: "Cafe interior with wooden tables and chairs"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Cafe",
    alt: "Cozy cafe corner with plants"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Cafe",
    alt: "Barista preparing coffee"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Food",
    alt: "Breakfast spread with coffee"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Coffee",
    alt: "Latte art"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Coffee",
    alt: "Coffee beans and cup"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Food",
    alt: "Avocado toast breakfast"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Food",
    alt: "Pancakes with berries"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1525629545813-e4e7ba0eb97c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Staff",
    alt: "Barista team"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-cafe-dark text-white py-24 mt-16">
        <div className="cafe-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-cafe-cream opacity-90 max-w-2xl mx-auto">
            Take a glimpse into our cozy ambiance, delicious food, and the art of coffee-making.
          </p>
        </div>
      </div>
      
      {/* Gallery Content */}
      <div className="cafe-container py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {["All", "Cafe", "Coffee", "Food", "Staff"].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category 
                  ? "bg-cafe-dark text-white" 
                  : "bg-cafe-cream text-cafe-dark hover:bg-cafe-light"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-cafe-dark bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white font-medium text-lg">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
            aria-label="Close modal"
          >
            ×
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white text-4xl"
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            {filteredImages.map(image => (
              image.id === selectedImage && (
                <img 
                  key={image.id}
                  src={image.src} 
                  alt={image.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )
            ))}
          </div>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white text-4xl"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
