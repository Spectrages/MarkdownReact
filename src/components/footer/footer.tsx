import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer;