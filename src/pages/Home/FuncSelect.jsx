import "./FuncSelect.css";
import UploadPopup from "./UploadPopup.jsx";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import User from "../../components/User.jsx";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

function FuncSelect() {
  const [selectedPrinter, setSelectedPrinter] = useState('BK001');
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPrintSide, setSelectedPrintSide] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedPaperSize, setSelectedPaperSize] = useState("A4");


  const handlePrint = () => {
    window.alert("File của bạn đã dược xử lí !");
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
        setIsFileUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <main style={{ height: "100%" }}>
        <User size="large" />
      <div className="container">
      <div className="functionEdit">
      <label>Máy in ID : {selectedPrinter}</label>
      <br/>
      <Link to='/app/student/printer-list'>
      <button>Chọn máy in</button>
      </Link>
      <input type="file" onChange={handleFileSelect}/>
      
      <label>Cài Đặt</label>
      <label>Số bản</label>
      <input style={{width:'10%',paddingLeft:'3.5%'}} type="text" value={selectedNumber}/>

          <label>Số mặt in</label>
      <select value={selectedPrintSide} onChange={(e) => setSelectedPrintSide(Number(e.target.value))}>
        <option value={1}>Một Mặt</option>
        <option value={2}>Hai Mặt</option>
      </select>
      <label>Cỡ giấy</label>
      <select value={selectedPaperSize} onChange={(e) => setSelectedPaperSize(e.target.value)}>
        <option value="A0">A0</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
      </select>
      <button className="Print" disabled={!selectedFile} onClick={handlePrint}>IN</button>
      </div>
      <div className="preview-file">
            {isFileUploaded ? (
               <embed src={selectedFile} type="application/pdf" width="80%" height="600px" />
            ) : (
              <p>Chưa Upload File</p>
            )}
          </div>
      </div>
      </main>
    </>    
  );
}

export default FuncSelect;
