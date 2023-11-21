import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import "./LandingPage.css";
import Footer from "../../components/Footer";
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};
function LandingPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#023556" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img
              alt="logo_bk"
              src="/home_logo.png"
              style={{
                width: 240,
                height: 72,
              }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button onClick={handleOpen}>
              <IconButton sx={{ color: 'white', fontSize: '18px' }}>
                | Đăng nhập
              </IconButton>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} >
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="./logoBK1.png" alt="" />
                  <hr />
                  <Typography variant='h5'>
                    Đăng nhập bằng:
                  </Typography>
                  <Link to="/studentlogin" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined"
                      style={{ marginTop: '10px', width: '200px' }}
                    >
                      Sinh viên của HCMUT
                    </Button>
                  </Link>

                  <br />
                  <Link to="/adminlogin" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" style={{ width: '200px' }}>
                    Quản trị viên
                  </Button>
                  </Link>
                </div>

              </Box>
            </Modal>
          </Box>
        </Toolbar>
        <Toolbar sx={{ backgroundColor: "#fff", marginTop: "auto" }}>
          <Button>
            <IconButton sx={{ color: "#000", fontSize: "18px" }}>
              TRANG CHỦ
            </IconButton>
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button>
              <IconButton sx={{ color: "#000", fontSize: "18px" }}>
                NGÔN NGỮ
              </IconButton>
            </Button>
            <IconButton>
              <img
                alt="logo_bk"
                src="/vietnam.png"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </IconButton>
            <IconButton>
              <img
                alt="logo_bk"
                src="/usa.png"
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }} className="image-container">
        <Toolbar />
        <img
          alt="logo_bk"
          src="/bk_background.png"
          style={{
            marginTop: "3%",
            width: "100%",
            height: "100vh",
          }}
        />
        <Typography
          sx={{ fontSize: "70px", fontWeight: "700" }}
          className="title"
        >
          DỊCH VỤ IN ẤN <br /> BKPrint
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}

LandingPage.propTypes = {
  window: PropTypes.func,
};

export default LandingPage;
