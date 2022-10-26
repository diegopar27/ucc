import React, { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
// import theme from "../plugin/themes";
import Nav from "../components/Nav";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

export default function ButtonAppBar() {
  const [nav, setNav] = useState([]);
  const theme = createTheme({
    palette: {
      primary: {
        light: "#4e0eff",
        main: "#620C8F",
        dark: "#4e0eff",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  const handleChatChange = (chat) => {
    setNav(chat);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" theme={theme}>
        <Toolbar>
          {/* <IconButton onClick={toggleDrawer(anchor, true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Niños con cancer
          </Typography>
          <Button color="inherit" border>
            salir
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ ml: 0.1 }}>
              <Logout />
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
