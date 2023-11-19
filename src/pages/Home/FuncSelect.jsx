import "./FuncSelect.css";
import UploadPopup from "./UploadPopup.jsx";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import User from "../../components/User.jsx";
function FuncSelect() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  return (
    <>
      <main style={{ height: "100%" }}>
        <User />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <figure>
            <img
              src="/printer.png"
              className="logo"
              alt="Printer"
              target="_blank"
            />
            <figcaption>Chọn máy in</figcaption>
          </figure>
          <figure>
            <img
              onClick={() => setbuttonPopup(true)}
              src="/paper.png"
              className="logo"
              alt="Paper"
              target="_blank"
            />
            <figcaption>Tải tài liệu</figcaption>
          </figure>
          <figure>
            <img src="/cash.png" className="logo" alt="Cash" target="_blank" />
            <figcaption>Thanh toán</figcaption>
          </figure>
        </Box>
      </main>
      <UploadPopup trigger={buttonPopup} setTrigger={setbuttonPopup}>
        <h3 className="Upload-header">Add file</h3>
        <Divider
          variant="middle"
          color="blue"
          sx={{ height: 2.5, borderRadius: 2 }}
        />
      </UploadPopup>
    </>
  );
}

export default FuncSelect;
