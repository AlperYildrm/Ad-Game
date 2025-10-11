"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Ahmethoca from "../../public/images/ahmethoca.png";
import Sau from "../../public/images/sauad.png";
import Link from "next/link";
import Image from "next/image";
import { useNarrator } from "@/context/NarratorContext";
import InformationButton from "@/components/InformationButton";

function BetAd() {
  const [adImage, setAdImage] = useState(Ahmethoca);
  const [isShown, setIsShown] = useState(true);
  const { showNarratorSequence } = useNarrator();

  useEffect(() => {
    const messages = [{ message: "Ops, not this...", duration: 1000 }];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration - 250, 0);
    const timer = setTimeout(() => setAdImage(Sau), totalTime);

    return () => clearTimeout(timer);
  }, []);

  if (!isShown) return null;

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={adImage}
          alt="Sau Ad"
          width={400}
          height={250}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>

      <IconButton
        component={Link}
        href="/3-why"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(255,255,255,0.7)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,1)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <InformationButton />
    </Box>
  );
}

export default BetAd;
