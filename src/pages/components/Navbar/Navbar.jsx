import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Appbar = () => (
  <Box sx={{ flexGrow: 1, marginBottom: 10}}>
    <AppBar>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, fontSize: "1.5rem" }}
        >
          Trainee Portal
        </Typography>
        <Button color="inherit" sx={{ fontSize: "1rem" }}>
          Trainee
        </Button>
        <Button color="inherit" sx={{ fontSize: "1rem" }}>
          Textfield Demo
        </Button>
        <Button color="inherit" sx={{ fontSize: "1rem" }}>
          Inputfield Demo
        </Button>
        <Button color="inherit" sx={{ fontSize: "1rem" }}>
          Children Demo
        </Button>
        <Button color="inherit" sx={{ fontSize: "1rem", ml: "1.5rem" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Appbar;
