"use client";

import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

function TeleportingButton() {
  const [repeat, setRepeat] = useState(0);
  const [_top, setTop] = useState(8);
  const [_right, setRight] = useState(8);
  const router = useRouter();

  const handleClose = () => {
    router.push("/11-LICK-IT");
  };

  const handleRNG = () => {
    const buttonSize = 200;
    setTop(Math.floor(Math.random() * (window.innerHeight - buttonSize)));
    setRight(Math.floor(Math.random() * 1000));
    setRepeat((prev) => prev + 1);
  };

  useEffect(() => {
    if (repeat > 5) {
      handleClose();
    }
  }, [repeat]);

  return (
    <IconButton
      onClick={handleRNG}
      sx={{
        position: "absolute",
        top: _top,
        right: _right,
        backgroundColor: "rgba(255,255,255,0.7)",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,1)",
        },
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default TeleportingButton;
