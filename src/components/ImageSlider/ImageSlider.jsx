// ImageSlider.js
import React, { useState } from "react";
import "./ImageSlider.css"; // Import your styles

const ImageSlider = ({ images }) => {
  const [startX, setStartX] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleStart = (e) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setDragging(true);
  };

  const handleMove = (e) => {
    if (!dragging) return;
    console.log(e.touches?.[0]);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    const sensitivity = 50; // Adjust as needed

    if (deltaX > sensitivity) {
      handlePrev();
      setDragging(false);
    } else if (deltaX < -sensitivity) {
      handleNext();
      setDragging(false);
    }
  };

  const handleEnd = () => {
    setDragging(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider_main_div">
      <div
        className="image-slider"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseUp={handleEnd}
      >
        <button onClick={handlePrev}> &lt;</button>
        <img
          style={{ width: "250px", height: "400px", objectFit: "contain" }}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        <button onClick={handleNext}> &gt;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
