import React from "react";
import { Grid, Box, AppBar, Button, Typography, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div style={{ position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "#F9A8D4",
            boxShadow: "none",
            borderBottom: "2px solid #eeeeee",
          }}
        >
          <Toolbar>
            <Typography
              noWrap
              component="div"
              color="#4B5563"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              2021 Sol Hayama All rights reserved
            </Typography>
            <Link to="">FAQ & Toc</Link> &nbsp;
            <Link to="">
              <GitHubIcon />
            </Link> &nbsp;
            <Link to="">
              <TwitterIcon />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Footer;
