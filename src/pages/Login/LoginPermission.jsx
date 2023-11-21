import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import HttpsIcon from '@mui/icons-material/Https';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import "./Login.css";
import LoginIcon from '@mui/icons-material/Login';
import LoginBar from '../../components/LoginBar'
import Footer from '../../components/Footer'
export default function Login(props) {
    const { window } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    const container = window !== undefined ? () => window().document.body : undefined;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setUsernameError(!e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(!e.target.value);
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <LoginBar />

            <Box component="main" sx={{ flexGrow: 1 }} className="image-container">
                <Toolbar />


                <Grid container className='template4'>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className='admin_contain'>
                        <Typography variant='h3'>
                            BKPrint! Quản trị viên đăng nhập
                        </Typography>
                        <Grid container>
                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <Typography marginTop='10%' marginBottom='10px'>
                                    Sử dụng tên đăng nhập và password hợp lệ <br />để có quyền truy cập và quản trị viên !!
                                </Typography>
                                <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
                                    Trở về trang chủ
                                </Link>
                                <br />
                                <img src="./logoBK1.png" alt="" style={{ padding: '5px' }} />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid sx={{ textAlign: 'center' }} className='admin_contain' marginTop='10%'>
                                    <Grid item xs={12} sx={{ marginTop: '10%' }}>
                                        <FormControl sx={{ m: 1, width: '50ch' }}>
                                            <TextField
                                                label="Username"
                                                id="outlined-start-adornment"
                                                required
                                                value={username}
                                                onChange={handleUsernameChange}
                                                error={usernameError}
                                                helperText={usernameError ? "Không được để trống" : ""}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sx={{ marginTop: '5%' }}>
                                        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                startAdornment={<InputAdornment position="start"><HttpsIcon /></InputAdornment>}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                                required
                                                value={password}
                                                onChange={handlePasswordChange}
                                                error={passwordError}
                                                helperText={passwordError ? "Không được để trống" : ""}
                                            />


                                        </FormControl>


                                    </Grid>
                                    <Button variant='outlined' sx={{ textAlign: 'center', marginTop: '5%' }} size="large" startIcon={<LoginIcon color="success" />} >
                                        Đăng nhập
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>


            </Box>

            <Footer />
        </Box>
    );
}
Login.propTypes = {
    window: PropTypes.func,
};
