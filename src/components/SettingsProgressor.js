import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

function SettingsProgressor({ label, progress, color = "primary" }) {
  return (
    <li style={{ listStyleType: "none", width: "100%", marginBottom: "1rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography variant="body2">{label}</Typography>
        <Typography variant="caption" color="text.secondary">
          {Math.round(progress)}%
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={progress} color={color} />
    </li>
  );
}

export default SettingsProgressor;
