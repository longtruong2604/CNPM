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

  const truncateFileName = (fileName, maxLength) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedName = fileName.substring(0, maxLength - 3) + ' ... ';
    return truncatedName;
  };

  const renderFilePreview = () => {
    if (selectedFile) {
        return <embed src={previewUrl} className="review-file" type="application/pdf" />;
    }
    return null;
  };

  return props.trigger ? (
    <div className="Popup">
      <div className="Popup-container">
        <button className="Close_Popup" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
        {/* <form>
          <h3 className="Upload-text">Link URL</h3>
          <input className="Upload" type="text"></input>
        </form>
        <h3 className="Upload-text2">Hoặc:</h3> */}
        
        <p class="Upload-frame">{selectedFile?
          (
          <div>
            {renderFilePreview()}
            <b>File Name:</b> <i>{truncateFileName(selectedFile.name, 10)}</i><br/>
            <b>File Size:</b> <i>{(selectedFile.size/1024).toFixed(2)} KB</i>
            <button className="Change-file" onClick={handleChangeFile}>Remove File</button>
          </div>)
          :'Không có file nào được chọn (Chỉ hỗ trợ file .pdf)'}
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
      <Link to="printer-list">
        <button className="Upload-button1" disabled={!selectedFile}>
          Upload
        </button>
      </Link>
      </div>
    </div>
  ) : (
    ""
  );
}

export default UploadPopup;
