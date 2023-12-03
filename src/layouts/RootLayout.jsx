import { Box } from "@mui/material";
import React from "react";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box
      sx={{
        background: 'url("/backGround.png") fixed center',
        backgroundSize: "100% 100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <MenuBar>
          <Outlet />
        </MenuBar>
      </Box>
      <Footer />
    </Box>
  );
};

export default RootLayout;
