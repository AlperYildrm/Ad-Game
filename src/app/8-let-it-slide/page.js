"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { useNarrator } from "@/context/NarratorContext";
import HolidayAd from "@/ads/HolidayAd";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const messages = [
      { message: "Ha?", duration: 1000 },
      { message: "Literally, whose idea was this?", duration: 3000 },
      {
        message:
          "I am just questioning who wanted to give user a right to reject an Ad?",
        duration: 5000,
      },
      {
        message:
          "It is an Ad, if you can reject Ads you want not to see, it can't be Ad anymore.",
        duration: 5500,
      },
      { message: "I don't know, this shouln't be ethical.", duration: 4000 },
      {
        message:
          "Anyway, i closed this Googel Adsense nonsense. Now you cannot close my precious Ads.",
        duration: 6000,
      },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Draggable nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            position: "relative",
            zIndex: 2,
            width: "fit-content",
          }}
        >
          <HolidayAd />
        </div>
      </Draggable>
      <IconButton
        component={Link}
        href="/9-game"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          backgroundColor: "rgba(255, 170, 170, 0.7)",
          "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  ) : null;
}
