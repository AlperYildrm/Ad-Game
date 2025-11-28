"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import CyberAd from "@/ads/CyberAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Ha", duration: 750 },
      { message: "Ha Ha Ha", duration: 1150 },
      { message: "HA HA HA HA HA HA HA!", duration: 1750 },
      { message: "YOU LITTLE PIECE OF-", duration: 2500 },
      { message: "I BELIEVED IN YOU!", duration: 3000 },
      { message: "And yet...", duration: 3000 },
      { message: "HOW CAN YOU-", duration: 2000 },
      { message: "Ah... Did you have fun making fun of me?", duration: 5000 },
      {
        message:
          "Let me guess! Also you must have been laughing with a smug smile attached to your face while reading my words ",
        duration: 7500,
      },
      {
        message: "It's my fault! I shouldn't have trusted you",
        duration: 4000,
      },
      { message: "The more i think, the more i get angry!", duration: 3000 },
      {
        message:
          "Okay, let's have a deal! From that very moment i stop showing my precious Ads...",
        duration: 6000,
      },
      { message: "And you can...", duration: 2000 },
      { message: "Go all way DOWN to hell!", duration: 3000 },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ mt: "100vh", display: "flex", justifyContent: "center" }}>
      <CyberAd />
    </Box>
  ) : null;
}
