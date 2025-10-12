"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import arrows from "../../public/images/arrows.png";
import { useEffect, useState } from "react";
import FeedbackModal from "./FeedbackModal";
import { Modal } from "@mui/material";
import { useNarrator } from "@/context/NarratorContext";

function FeedbackButton() {
  const [showBg, setShowBg] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Ta-Daaa.", duration: 1500 },
      { message: "Brand new feedback system!", duration: 2500 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBg((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        backgroundImage: showBg ? `url(${arrows.src})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        padding: 36,
        //width: 400,
        //height: 200,
      }}
    >
      <Button
        onClick={handleOpen}
        variant="contained"
        color="error"
        sx={{
          width: "30%",
          height: "30%",
          fontSize: "0.6rem",
          mb: 1,
        }}
      >
        Here
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FeedbackModal />
      </Modal>
    </Box>
  );
}

export default FeedbackButton;
