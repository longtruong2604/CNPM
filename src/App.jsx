import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { PrinterList } from "./pages/PrinterList/PrinterList";
import MenuBar from "./components/MenuBar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        background: 'url("./backGround.png") fixed center',
        // backgroundColor: "red",
        backgroundSize: "100% 100%",
      }}
    >
      <MenuBar>
        <PrinterList></PrinterList>
      </MenuBar>
    </Box>
  );
}

export default App;
