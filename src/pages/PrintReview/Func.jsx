import './Func.css'
import { Divider, 
        Typography,
        Box } 
from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Grid from '@mui/material/Unstable_Grid2';

import NumberInputBasic from './assets/Number_input.jsx';
import Print_page_select from './assets/Select1.jsx';
import PrintSelect1 from './assets/Select2.jsx';
import PageOriSelect from './assets/Select3.jsx';
import PageSizeSelect from './assets/Select4.jsx'
import QuantityInput from './assets/number-slider.jsx'

import User from "../../components/User.jsx";

import { Link } from "react-router-dom";

function Func(){
    return(
      <main style={{ height: "100%" }}>
      <User size="large" />
        <Grid container spacing={2}>
        <Grid mb={0}>
        <Grid container spacing={1} className="print-config" mb={0} marginTop={1} marginBottom={2} marginLeft={-2}>
          <Grid lg="auto" sx={{}}>
            <button className="Print-button"><PrintIcon fontSize= 'large'/> In</button>
          </Grid>
          <Grid container spacing={1} lg="auto" className= "number-copy" sx={{}} marginTop={1} marginLeft={3}>
            <Typography variant="h6" sx={{}} marginTop={2} marginRight={1} fontSize={20}>
              Số bản:  
            </Typography>
            <NumberInputBasic></NumberInputBasic>
          </Grid> 
        </Grid>
        <div className='printer-status'>
        <Grid container spacing={1} className="text" marginTop={1} marginBottom={4}>
            <Typography variant='h5' sx={{}}>
              Máy in
            </Typography>
        </Grid> 
        <Grid container spacing={5} mb={0} marginLeft={-1}>
          <Grid className="printer" container spacing={1} mb={0} height={70} width={200} marginBottom={1} padding={0} alignContent={'center'} paddingLeft={4}>
            <Grid lg={1}>
              <Box width={72} textAlign={'left'}>
                <Typography variant='h6' sx={{}} width={100} height={20} color={'black'}>
                  ID: xxxxxx
                </Typography>
              </Box>
              <Box width={72} textAlign={'left'}>
                <Typography variant='h6' sx={{}} color={'green'}>
                Rảnh
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid lg="auto" sx={{}}>
            <Link to="/app/printer-list">
            <button class="Choose-button"> Chọn</button>
            </Link>
          </Grid>
        </Grid>
        </div>
        <Grid container spacing={1} className="text">
          <Box marginLeft={-2.5}>
            <Typography variant='h5' sx={{}} textAlign={'left'} marginLeft={1}>
              Cài đặt
            </Typography>
            <Print_page_select className="Page-select" ></Print_page_select>
          </Box> 
        </Grid>
        <Grid container spacing={1} className="page-config" mb={0}>
          <Grid container spacing={1} className="text" marginBottom={1} marginTop={1}>
              <Typography variant='h5' sx={{}}>
                Trang:
                <input className="page-input" placeholder='Các trang cách nhau bằng dấu ","'/>
              </Typography>
          </Grid> 
        </Grid>
        <Grid container spacing={1} marginLeft={-3}>
          <PrintSelect1 className="Page-select" ></PrintSelect1>
        </Grid>
        <Grid container spacing={1} marginLeft={-3}>
          <PageOriSelect className="Page-select" ></PageOriSelect>
        </Grid>
        <Grid container spacing={1} marginLeft={-3}>
          <PageSizeSelect className="Page-select" ></PageSizeSelect>
        </Grid>
          </Grid>
          <Divider 
          orientation="vertical" 
          flexItem
          variant="middle"
          color="black" 
          sx={{ 
            borderRadius: 2,
            width: 2.5
            }}/>
          <Grid marginTop={2}>
            <Box>
              <div className="rectangle" />
            </Box>
            <Box>
              <QuantityInput></QuantityInput>
            </Box>
          </Grid>
        </Grid>
      </main>
    );
}

export default Func