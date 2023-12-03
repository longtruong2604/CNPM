import { Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Toolbar
      sx={{
        backgroundColor: "#023556",
        // flexShrink: 0,
        color: "#fff",
        fontSize: "16px",
        // bottom: "64px",
        // width: "100vw",
        // position: "relative",
      }}
    >
      <Typography sx={{ marginLeft: "7%" }}>
        Copyright@2023.Nhóm-1 L02 Trường Đại học Bách Khoa TP.HCM
      </Typography>
    </Toolbar>
  );
}
