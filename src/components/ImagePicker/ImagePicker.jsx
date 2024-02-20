import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ... (other imports)

const ImagePicker = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  console.log(selectedImages);
  console.log(selectedImages?.length);

  const onDrop = useCallback((acceptedFiles) => {
    // Update the state with the selected images
    setSelectedImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*", // Specify accepted file types
    onDrop,
    multiple: true, // Allow multiple files to be selected
  });

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag and drop images here, or click to select</p>
      </div>
      <div>
        <h4>Selected Images:</h4>
        {selectedImages?.length > 0 ? (
          <Slider {...settings}>
            {selectedImages.map((image, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`selected-${index}`}
                  style={carouselImageStyles}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p>No images selected</p>
        )}
      </div>
    </div>
  );
};
const dropzoneStyles = {
  border: "2px dashed #d9d9d9",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  margin: "30px",
};

const carouselImageStyles = {
  maxWidth: "100%",
  maxHeight: "300px",
  margin: "0 auto",
};
// ... (other styles)

export default ImagePicker;
