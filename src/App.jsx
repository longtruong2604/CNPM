import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider, createBrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { PrinterList } from "./pages/PrinterList/PrinterList";
import Landing from "./pages/Landing/Landing";
import FuncSelect from "./pages/Home/FuncSelect";
import LoginAsStudent from "./pages/Login/LoginAsStudent";
import LoginPermission from "./pages/Login/LoginPermission";
import FileList from "./pages/FileList/FileList";
import { Preview } from "@mui/icons-material";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      {
        path: "/app/student",
        element: <FuncSelect />,
      },
      {
        path: "/app/student/printer-list",
        element: <PrinterList />,
      },
      {
        path: "/app/history",
        element: <FileList />,
      },
    ],
  },
  {
    path: "studentlogin",
    element: <LoginAsStudent />,
  },
  {
    path: "adminlogin",
    element: <LoginPermission />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
