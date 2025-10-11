"use client";

import { useState } from "react";
import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Captcha from "./Captcha";

function AdCloseModal() {
  const [open, setOpen] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const allChecked = agree1 && agree2;

  return (
    <Paper elevation={6} sx={{ padding: 4, textAlign: "left", width: 400 }}>
      <Typography variant="h6" gutterBottom>
        Are You Sure?
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={agree1}
              onChange={(e) => setAgree1(e.target.checked)}
            />
          }
          label="I am aware of what I am doing now."
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agree2}
              onChange={(e) => setAgree2(e.target.checked)}
            />
          }
          label="I am responsible for anything that may happen as a result of my actions."
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleOpen}
          disabled={!allChecked}
        >
          Close Ad
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Captcha />
      </Modal>
    </Paper>
  );
}

export default AdCloseModal;
