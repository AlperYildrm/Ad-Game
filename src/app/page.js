import React from "react";
import MainMenu from "../components/MainMenu";
import { Box } from "@mui/material";

function page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MainMenu />
    </Box>
  );
}

export default page;
