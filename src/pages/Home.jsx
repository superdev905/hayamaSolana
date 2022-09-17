import React from "react";
import {
  Grid,
  Table,
  Typography,
  TextField,
  Button,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Home = () => {
  return (
    <Grid container paddingX={20} marginTop={2} sx={{ width: { xs: "100%" } }}>
      <Grid item xs={12} paddingBottom={3}>
        <Typography>Search NFTs</Typography>
      </Grid>
      <Grid item xs={7}>
        <TextField
          placeholder="Input wallet address"
          fullWidth
          sx={{ height: "6px" }}
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          sx={{
            marginLeft: 2,
            background: "#4F46E5",
            paddingY: 1.9,
            textTransform: "none",
          }}
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={12} paddingY={3}>
        <Typography>Transactions</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{ background: "#8B5CF6", textTransform: "none" }}
        >
          Buy Offers
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#F3F4F6",
            color: "#6B7280",
            marginLeft: 1,
            textTransform: "none",
          }}
        >
          Sell Requests
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Table
          sx={{
            border: "1px solid #eeeeee",
            borderRadius: "",
            marginTop: 2,
            overflow: "scroll",
          }}
        >
          <TableHead>
            <TableRow sx={{ background: "#F3F4F6" }}>
              <TableCell align="center">BUYER</TableCell>
              <TableCell align="center">SELLER</TableCell>
              <TableCell align="center">NFT</TableCell>
              <TableCell align="center">OFFER(SOL)</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center">DATE</TableCell>
              <TableCell align="center">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>There are no transactions yet</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default Home;
