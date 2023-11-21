import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Avatar, Box, Chip, Typography, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DescriptionIcon from "@mui/icons-material/Description";
import { green } from "@mui/material/colors";

const variant = {
  large: {
    avaWidth: 106.99,
    avaSize: 40,
    userName: "h4",
    faculty: "body1",
    greenCircle: 12,
    chipIcon: "large",
    chipText: 17,
    pTop: "3px",
  },
  small: {
    avaWidth: 77.48,
    avaSize: 30,
    userName: "h5",
    faculty: "body2",
    greenCircle: 10,
    chipIcon: "small",
    chipText: 15,
    pTop: "0",
  },
};

function User({ size }) {
  return (
    <header className="User_info">
      <Grid container spacing={1} className="user-info-container" mb={2}>
        <Grid lg="auto" sx={{}}>
          <Avatar
            sx={{
              height: "100%",
              width: variant[size].avaWidth,
              fontSize: variant[size].avaSize,
              backgroundColor: "#E9F3F9",
              color: "#023556",
            }}
          >
            A
          </Avatar>
        </Grid>
        <Grid lg={3}>
          <Box sx={{ paddingTop: variant[size].pTop }}>
            <Typography
              variant={variant[size].userName}
              sx={{ fontWeight: 500 }}
            >
              Nguyễn Văn A
            </Typography>
          </Box>
          <Box>
            <Typography variant={variant[size].faculty}>
              <CircleIcon
                sx={{
                  fontSize: variant[size].greenCircle,
                  color: green[500],
                  marginRight: 1,
                }}
              />
              Khoa khoa học và kỹ thuật máy tính
            </Typography>
          </Box>
          <Box sx={{ paddingTop: variant[size].pTop }}>
            <Chip
              size={variant[size].chipIcon}
              icon={<DescriptionIcon sx={{ height: 17, color: "#023556" }} />}
              label="100"
              sx={{
                fontWeight: 700,
                fontSize: variant[size].chipText,

                backgroundColor: "#E9F3F9",
                opacity: 0.82,
                color: "#023556",
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

export default User;
