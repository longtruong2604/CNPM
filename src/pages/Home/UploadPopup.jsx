import React from "react";
import "./UploadPopup.css";

function UploadPopup(props) {
  return props.trigger ? (
    <div className="Popup">
      <div className="Popup-container">
        <button className="Close_Popup" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
        <form>
          <h3 className="Upload-text">Link URL</h3>
          <input className="Upload" type="text"></input>
        </form>
        <h3 className="Upload-text2">Hoặc:</h3>
        <p class="Upload-frame">Kéo thả hoặc chọn file từ máy bạn</p>
        <button class="Upload-button">Upload</button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default UploadPopup;
