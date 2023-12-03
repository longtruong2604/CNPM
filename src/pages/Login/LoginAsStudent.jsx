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
import { useState } from 'react'
import LoginBar from '../../components/LoginBar'
import Footer from '../../components/Footer'
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const { window } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);

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

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/account')
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const LoginComplete = (window) => {

        if (username.trim() === '') {
            setError('Vui lòng nhập tên đăng nhập !');
            return;
        }
    
        if (password.trim() === '') {
            setError('Vui lòng nhập mật khẩu !');
            return;
        }
        const correctUser = accounts.find((user) => user.username === username );
        const correctPassword = accounts.find((user) => user.username === username && user.password === password);

        if(correctPassword) {
            setError('');
            setLoggedIn(true); 
            navigate('/app/student'); 
            //return username;
        }
        else {
            if(!correctUser){
                setError('Tên đăng nhập không đúng !');
            }
            else if(!correctPassword){
                setError('Mật khẩu không đúng !');
            }
        }
    }

    if (isLoggedIn) {
        navigate('/app/student', { replace: true });
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <LoginBar />

            <Box component="main" sx={{ flexGrow: 1 }} className="image-container">
                <Toolbar />
                <div className="template1">
                    <img
                        alt="logo_bk"
                        src="/template1.png"
                        style={{
                            width: '48%',
                            height: '100vh',
                        }}
                        className="template2"
                    />
                    <img
                        alt="logo_bk"
                        src="/template2.png"
                        style={{
                            width: '50%',
                            height: '100vh'
                        }}
                        className="template2"
                    />
                </div>

                <Grid container className='template3'>
                    <Grid item xs={5}>
                        <img
                            src="/template3.png"
                            alt="template3"
                            className='template_img'
                        />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <Grid sx={{ textAlign: 'center' }}>
                            <Grid item xs={12} >
                                <Typography variant='h2' fontWeight={700} marginTop={-5}>
                                    Đăng nhập
                                </Typography>
                                {<p style={{color:'red',fontSize:'20px',fontWeight:'bold'}}>{error}</p>}
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: '10%' }}>
                                <FormControl sx={{ m: 1, width: '50ch' }}>
                                    <TextField
                                        label="Tên đăng nhập"
                                        id="outlined-start-adornment"
                                        required
                                        value={username}
                                        onChange={handleUsernameChange}
                                        error={usernameError}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: '5%' }}>
                                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password" required>Mật khẩu</InputLabel>
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
                                        label="Mật khẩu"
                                        required
                                        value={password}
                                        onChange={handlePasswordChange}
                                        error={passwordError}
                                    />
                                    <Typography sx={{ textAlign: 'right', marginTop: '3%' }}>
                                        Quên mật khẩu ?
                                    </Typography>
                                </FormControl>
                            </Grid>
                            <Button onClick={LoginComplete} type='submit' variant='contained' sx={{ textAlign: 'center', marginTop: '5%' }}>
                                Đăng nhập
                            </Button>
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
