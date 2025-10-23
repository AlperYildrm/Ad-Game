import { Paper } from "@mui/material";
import React from "react";

function AccountModal() {
  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
      <h2>Account Settings</h2>
      <p>Manage your account settings here.</p>
    </Paper>
  );
}

export default AccountModal;
