"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import DonateModal from "./DonateModal";
import { Modal } from "@mui/material";

function DonateButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Donate
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <DonateModal />
      </Modal>
    </>
  );
}

export default DonateButton;
