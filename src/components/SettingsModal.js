"use client";

import { Box, Button, Paper, Switch } from "@mui/material";
import React from "react";
import { useState } from "react";
import SettingsSettings from "./SettingsSettings";
import { Modal } from "@mui/material";

function SettingsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
      ☀️ <Switch /> 🌙
      <br />
      <Button
        variant="text"
        color="primary"
        size="small"
        sx={{ mt: 5 }}
        onClick={handleOpen}
      >
        more settings
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <SettingsSettings />
      </Modal>
    </Paper>
  );
}

export default SettingsModal;
