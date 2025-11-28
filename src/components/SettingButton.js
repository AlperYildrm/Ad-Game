"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import SettingsModal from "./SettingsModal";

function SettingButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Settings
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            sx: { backgroundColor: "transparent" },
          },
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <SettingsModal />
      </Modal>
    </>
  );
}

export default SettingButton;
