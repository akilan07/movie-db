import { Typography } from "@mui/material";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Typography>&copy; {new Date().getFullYear()} AkiTech, Inc.</Typography>
      </div>
    );
  }
}
