import "./FuncSelect.css";
import UploadPopup from "./UploadPopup.jsx";
import { useState } from "react";
// import { Box, Divider } from "@mui/material";
import User from "../../components/User.jsx";
import { Link } from "react-router-dom";

function FuncSelect() {
  const [selectedPrinter, setSelectedPrinter] = useState('BK001');
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [selectedPrintSide, setSelectedPrintSide] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [selectedPaperSize, setSelectedPaperSize] = useState("A4");

  const handlePrint = () => {
    window.alert("File của bạn đã dược xử lí !");
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file);
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
      <button className="Choose">Chọn máy in</button>
      </Link>
      <label for="file-upload" class="label-file-upload">{selectedFile?'Tệp đã chọn :':'Chọn tệp'}</label>
      <input type="file"  id="file-upload" onChange={handleFileSelect}/>
      {selectedFile?<span>{selectedFileName.name}</span>:
        <p>{' '}</p>
      }
      <hr/>
      <h1>CÀI ĐẶT</h1>
      <label>Số bản</label>
      <input style={{width:'12%',paddingLeft:'3%',borderRadius:'15px',border:'1px solid black'}} type="number" value={selectedNumber}/>
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
