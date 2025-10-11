"use client";

import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import LickIt from "../../public/images/lickit.png";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";
import LickConfirmModal from "@/components/LickConfirmModal";

function LickitAd() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={LickIt}
          alt="Lickkk IT!"
          width={400}
          height={250}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>
      <InformationButton />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <LickConfirmModal closeModal={handleClose} />
      </Modal>
    </Box>
  );
}

export default LickitAd;
