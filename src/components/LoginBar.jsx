import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function LoginBar() {
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return (
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
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button>
                            <IconButton sx={{ color: 'white', fontSize: '18px' }}>
                                TRANG CHỦ
                            </IconButton>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>

        </AppBar>
    )
}
