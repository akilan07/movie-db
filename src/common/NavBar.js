import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const navbarColor = blue[0];
    return (
      <div className="navbar">
        <Box>
          <AppBar style={{ backgroundColor: navbarColor }}>
            <Toolbar>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                MovieDB
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}
