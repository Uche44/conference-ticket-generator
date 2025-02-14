import { useState, useEffect } from "react";

export const ImageUpload = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  useEffect(() => {
    // Load Cloudinary script dynamically
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openWidget = () => {
    if (window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dcw1m1rak",
          uploadPreset: "ml_default",
          multiple: false,
          folder: "my_uploads",
        },
        (error, result) => {
          if (!error && result.event === "success") {
            console.log("Upload successful:", result.info);
            setUploadedImageUrl(result.info.secure_url);
          }
        }
      );

      widget.open();
    } else {
      alert("Cloudinary script is still loading. Try again in a moment.");
    }
  };

  return (
    <>
      <button
        onClick={openWidget}
        className="img-upload"
      >
        Upload Image
      </button>

      {uploadedImageUrl && (
        <div className="img">
          <p>Uploaded Image:</p>
          <img
            src={uploadedImageUrl}
            alt="Uploaded"
            className="img"
          />
        </div>
      )}
    </>
  );
};
