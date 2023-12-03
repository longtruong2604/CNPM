import React, { useState } from "react";
import "./UploadPopup.css";
import { Link } from "react-router-dom";

function UploadPopup(props) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleChangeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleUpload = () => {
    //props.setFile(selectedFile);
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="Popup">
      <div className="Popup-container">
        <button className="Close_Popup" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
        <p class="Upload-frame">{selectedFile?
          (
          <div>
            <b>File Name:</b> <i>{selectedFile.name}</i><br/>
            <b>File Size:</b> <i>{(selectedFile.size/1024).toFixed(2)} KB</i>
          </div>)
          :'Không có file nào được chọn'}
        </p>
        <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button className="Upload-button" onClick={() => document.getElementById('fileInput').click()}>
        Choose File
      </button>
      <button className="Change-file"
      disabled={!selectedFile}
       onClick={handleChangeFile}>
        Remove File
        </button>

        <button
          className="Upload-button1"
          disabled={!selectedFile}
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  ) : (
    ''
  );
}

export default UploadPopup;
