import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Toolbar, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home/Home";
import { PrinterList } from "./pages/PrinterList/PrinterList";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="/printerList"
        element={
          <Box
            sx={{
              background: 'url("./backGround.png") fixed center',
              backgroundSize: "100% 100%",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ height: "100%" }}>
              <MenuBar>
                <PrinterList />
              </MenuBar>
            </Box>
            <Footer />
          </Box>
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
