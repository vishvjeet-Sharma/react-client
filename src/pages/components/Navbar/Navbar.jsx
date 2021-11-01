import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Appbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, fontSize: "1.3rem" }}
        >
          Trainee Portal
        </Typography>
        <Button color="inherit" sx={{ fontSize: ".8rem" }}>
          Trainee
        </Button>
        <Button color="inherit" sx={{ fontSize: ".8rem" }}>
          Textfield Demo
        </Button>
        <Button color="inherit" sx={{ fontSize: ".8rem" }}>
          Inputfield Demo
        </Button>
        <Button color="inherit" sx={{ fontSize: ".8rem" }}>
          Children Demo
        </Button>
        <Button color="inherit" sx={{ fontSize: ".8rem", ml: "1.5rem" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Appbar;
