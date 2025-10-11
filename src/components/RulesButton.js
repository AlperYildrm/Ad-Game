"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import RulesModal from "./RulesModal";

function RulesButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="contained" color="error" onClick={handleOpen} fullWidth>
        Rules
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <RulesModal />
      </Modal>
    </Box>
  );
}

export default RulesButton;
