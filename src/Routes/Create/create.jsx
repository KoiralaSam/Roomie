import React, { useState, useRef } from "react";
import "./create.styles.scss";

export default function Create() {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Handle the file upload here
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div
      className="documentSelector"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        {!selectedFile && (
          <>
            <button className="button-upload" onClick={handleClick}>
              Upload a file
            </button>
            <input
              type="file"
              onChange={handleFileChange}
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
          </>
        )}
      </form>

      {selectedFile && (
        <div>
          <button
            style={{ position: "absolute", top: "0", right: "0" }}
            // onClick={handleNext}
          >
            Next
          </button>
          <input placeholder="Enter Post Description" />
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      )}
    </div>
  );
}
