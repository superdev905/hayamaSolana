import React from "react";
import { Grid, Box, AppBar, Button, Typography, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "white",
            boxShadow: "none",
            borderBottom: "2px solid #eeeeee",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="#EC4899"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Hayama{" "}
              <span style={{ fontSize: "13px", color: "#4B5563" }}>
                &nbsp;&nbsp;NFT trade has never been so easy
              </span>
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#4E44CE",
                textTransform: "none",
                paddingY: 1.5,
              }}
            >
              Select Wallet
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
