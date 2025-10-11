import { Paper, Typography } from "@mui/material";
import React from "react";

function SettingsSettings() {
  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        What kind of settings did you expect?
      </Typography>
      <Typography variant="body1">
        It is just a game about ads, what are you looking for? I added a dark
        mode switch because i hate bright white light. So yeah, that's it for
        now. No more settings.
      </Typography>
    </Paper>
  );
}

export default SettingsSettings;
