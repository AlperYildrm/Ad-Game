import React from "react";
import { Box } from "@mui/material";
import Windowad from "../../public/images/windowsad.png";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";
import { useState, useRef } from "react";
import { Modal } from "@mui/material";
import WindowModel from "@/components/WindowModel";

function WindowAd() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Image
        src={Windowad}
        alt="Fine Armors"
        width={600}
        height={375}
        style={{ borderRadius: "8px" }}
      />
      <Box
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "150px",
          height: "150px",
          cursor: "pointer",
          zIndex: 2,
          //backgroundColor: "rgba(255,0,0,0.3)",
        }}
      />

      <InformationButton />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WindowModel />
      </Modal>
    </Box>
  );
}

export default WindowAd;
