import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
    Avatar,
    Box,
    Chip,
    Typography,
    Divider
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DescriptionIcon from "@mui/icons-material/Description";
import { green } from "@mui/material/colors";

function User(){
    return(
        <header className='User_info'>
          <Grid container spacing={1} className="user-info-container" mb={2}>
           <Grid lg="auto" sx={{}}>
              <Avatar
              sx={{
              height: "100%",
              width: 77.48,
              fontSize: 30,
              backgroundColor: "#E9F3F9",
              color: "#023556",
              }}
            >
            A
            </Avatar>
          </Grid>
          <Grid lg={3}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                Nguyễn Văn A
              </Typography>
            </Box>
          <Box>
            <Typography variant="body2">
              <CircleIcon
                sx={{ fontSize: 10, color: green[500], marginRight: 1 }}
              />
              Khoa khoa học và kỹ thuật máy tính
            </Typography>
          </Box>
          <Box>
            <Chip
              size="small"
              icon={<DescriptionIcon sx={{ height: 17 }} />}
              label="100"
              sx={{
                fontWeight: 700,
                backgroundColor: "#E9F3F9",
                opacity: 0.82,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        color="black"
        sx={{ height: 2.5, borderRadius: 2 }}
      />
    </header>
  );
}

export default User