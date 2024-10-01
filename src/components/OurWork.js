import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Lightbox styles
import { FaSearch } from 'react-icons/fa';
import Footer from '../components/Footer';
// import './OurWork.css';

const OurWork = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const images = [
      '/about.png',
      '/about_content.png',
      '/gardening.jpg',
      '/hair.jpg',
      '/human.jpg',
      '/image1.jpg',
      '/image2.jpg',
      '/image3.jpg',
      '/realestate.jpg',
      '/restaurants.jpg',
      '/retail.jpg',
      '/service.jpg',
      // Add more images here
    ];

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="our-work-container">
            {/* Header Section with Background Image and "Our Work" Text */}
            <div className="header-section">
                <img src="/about.png" alt="Header" className="header-image" />
                <div className="header-text">Our Work</div>
            </div>

            {/* Image Gallery Section */}
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
                        <img src={image} alt={`Gallery ${index}`} />
                        <div className="hover-overlay">
                            <FaSearch className="search-icon" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <Lightbox
                    mainSrc={images[(photoIndex) % images.length]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
            <Footer/>
        </div>
    );
};

export default OurWork;
