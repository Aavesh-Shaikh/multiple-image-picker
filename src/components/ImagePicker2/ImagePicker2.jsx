import React, { useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const MultipleImagePicker = ({ onImagesSelected }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append("file", file);

    return {
      url: "YOUR_UPLOAD_API_ENDPOINT",
      body,
    };
  };

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === "done") {
      setSelectedImages([...selectedImages, { ...meta }]);
    } else if (status === "removed") {
      const updatedImages = selectedImages.filter(
        (image) => image.id !== meta.id
      );
      setSelectedImages(updatedImages);
    }
  };

  // Notify parent component about the selected images
  //   React.useEffect(() => {
  //     onImagesSelected(selectedImages);
  //   }, [selectedImages, onImagesSelected]);

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="image/*"
      maxFiles={10}
      inputContent="Drag & drop or click to select images"
      styles={{
        dropzone: {
          minHeight: 200,
          border: "2px dashed #cccccc",
          borderRadius: "4px",
          padding: "20px",
          cursor: "pointer",
        },
        inputLabel: { fontSize: "16px", fontWeight: "bold" },
      }}
    />
  );
};

export default MultipleImagePicker;
