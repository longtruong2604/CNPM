import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { PrinterList } from "../pages/PrinterList/PrinterList";
import HomeIcon from "@mui/icons-material/Home";
import UpdateIcon from "@mui/icons-material/Update";
import BuildIcon from "@mui/icons-material/Build";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  backgroundColor: "#01121E",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "#01121E",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MenuBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: "#023556" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
              alt="logo_bk"
              src="/logo_bk.png"
              style={{
                width: 132,
                height: 52,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 1 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton>
                <Typography variant="h6" color="white">
                  Trương Thành Long
                </Typography>
              </IconButton>
              <IconButton>
                <img
                  alt="logo_bk"
                  src="/vietnam.png"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
              <IconButton>
                <img
                  alt="logo_bk"
                  src="/usa.png"
                  style={{
                    width: 28,
                    height: 28,
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon sx={{ color: "white" }} />
              ) : (
                <ChevronLeftIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ backgroundColor: "#455a64" }} />
          <List
            sx={{
              color: "white",
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            {[
              {
                text: "Trang chủ",
                icon: <HomeIcon fontSize="medium" sx={{ color: "white" }} />,
                link: '/home'
              },
              {
                text: "Lịch sử",
                icon: <UpdateIcon fontSize="medium" sx={{ color: "white" }} />,
              },
              {
                text: "Hỗ trợ",
                icon: <BuildIcon fontSize="medium" sx={{ color: "white" }} />,
              },
              {
                text: "Đăng xuất",
                icon: <LogoutIcon fontSize="medium" sx={{ color: "white" }} />,
              },
            ].map((item, index) => (
              <React.Fragment key={item.text}>
                <ListItem
                  disablePadding
                  sx={{ display: "block", backgroundColor: "#" }}
                >
                  <ListItemButton
                    
                    sx={{
                      minHeight: 60,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        fontSize: 28,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
                {index < 3 && <Divider sx={{ backgroundColor: "#455a64" }} />}
              </React.Fragment>
            ))}
          </List>
          <Divider sx={{ backgroundColor: "#455a64" }} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 8 }}>
          <DrawerHeader />
          <PrinterList />
         

        </Box>
        <Toolbar sx={{ backgroundColor: '#023556', flexShrink: 0, color: '#fff', fontSize: '16px' }}>
          <Typography sx={{ marginLeft: '7%' }}>
            Copyright@2023.Nhóm-1 L02 Trường Đại học Bách Khoa TP.HCM
          </Typography>
        </Toolbar>
      </Box>
     

  
  );
}
