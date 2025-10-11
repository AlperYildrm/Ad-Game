import React from "react";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function InformationButton() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 8,
        left: 8,
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: "4px",
        px: 1,
        py: 0.2,
      }}
    >
      <Typography variant="caption" sx={{ fontSize: "0.7rem", mr: 0.5 }}>
        Ads by Googel
      </Typography>
      <InfoOutlinedIcon sx={{ fontSize: "0.9rem", color: "#555" }} />
    </Box>
  );
}

export default InformationButton;
