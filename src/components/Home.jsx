
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../style.css';


function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: '#023556' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
            <Button>
              <IconButton sx={{ color: 'white', fontSize: '18px' }}>
                | Đăng nhập
              </IconButton>
            </Button>
          </Box>
        </Toolbar>
        <Toolbar sx={{ backgroundColor: '#fff', marginTop: 'auto' }}>
          <Button>
            <IconButton sx={{ color: '#000', fontSize: '18px' }}>
              TRANG CHỦ
            </IconButton>
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button>
              <IconButton sx={{ color: '#000', fontSize: '18px' }}>
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

      <Box component="main" sx={{  flexGrow: 1 }} className="image-container">
        <Toolbar />
        <img
          alt="logo_bk"
          src="/bk_background.png"
          style={{
            marginTop: '3%',
            width: '100%',
            height: '100vh',
          }}
        />
        <Typography sx={{ fontSize: '70px', fontWeight: '700' }} className="title">
          DỊCH VỤ IN ẤN <br /> BKPrint
        </Typography>
      </Box>

      <Toolbar sx={{ backgroundColor: '#023556', flexShrink: 0, marginTop: 'auto', color:'#fff', fontSize: '16px' }}>
        Copyright@2023.Nhóm-1 L02 Trường Đại học Bách Khoa TP.HCM
      </Toolbar>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
