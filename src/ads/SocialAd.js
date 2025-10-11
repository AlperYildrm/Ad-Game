"use client";

import React, { useEffect, useState } from "react";
import { Box, IconButton, LinearProgress, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import xAdImg from "../../public/images/Xad.png";
import Link from "next/link";
import Image from "next/image";
import AdCloseModal from "@/components/AdCloseModal";
import InformationButton from "@/components/InformationButton";

export default function SocialAd() {
  const [progress, setProgress] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    const stepMs = 100;
    const increment = 100 / (10000 / stepMs);
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + increment;
        if (next >= 100) {
          clearInterval(id);
          if (mounted) {
            setProgress(100);
            setEnabled(true);
          }
          return 100;
        }
        return next;
      });
    }, stepMs);

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={xAdImg}
          alt="Twitre"
          width={800}
          height={500}
          style={{ borderRadius: "8px", cursor: "pointer", display: "block" }}
        />
      </Link>

      <IconButton
        aria-label="close"
        disabled={!enabled}
        onClick={enabled ? handleOpen : undefined}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: enabled
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.6)",
          "&:hover": {
            backgroundColor: enabled ? "rgba(255,255,255,1)" : undefined,
          },
          opacity: enabled ? 1 : 0.6,
          cursor: enabled ? "pointer" : "not-allowed",
        }}
      >
        <CloseIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <AdCloseModal />
      </Modal>

      <Box sx={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 6,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        />
      </Box>
      <InformationButton />
    </Box>
  );
}
