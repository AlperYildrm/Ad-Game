import { Paper } from "@mui/material";
import React from "react";

function ProfileModal() {
  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
      <h2>Profile Settings</h2>
      <p>Manage your profile settings here.</p>
    </Paper>
  );
}

export default ProfileModal;
