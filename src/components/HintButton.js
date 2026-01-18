"use client";

import React, { useState } from "react";
import { Fab, Snackbar, Alert } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const HintButton = () => {
  const [open, setOpen] = useState(false);
  const [hintMessage, setHintMessage] = useState("");
  const pathname = usePathname();
  const { t } = useTranslation();

  const handleClick = () => {
    // Extract slug from pathname (e.g., "/1-thankyou" -> "1-thankyou")
    const slug = pathname.split("/").filter(Boolean).pop() || "home";
    const message = t(`hints.${slug}`, t("hints.default"));
    setHintMessage(message);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Don't show on home page if desired, or handle "home" hint.
  // For now, let's allow it everywhere.
  if (pathname.includes("The-End")) return null;

  return (
    <>
      <Fab
        color="warning"
        aria-label="hint"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 9999, // Ensure it's on top
        }}
        size="medium"
      >
        <LightbulbIcon />
      </Fab>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {hintMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default HintButton;
