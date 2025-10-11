"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import LickitAd from "@/ads/LickitAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Hmm...", duration: 1000 },
      { message: "Now, i recognize your skills and luck.", duration: 3000 },
      {
        message:
          "I undestand that i can't defeat you by skill and luck needed levels.",
        duration: 5000,
      },
      { message: "Nevertheless!", duration: 1500 },
      {
        message:
          "Every skilled and lucky people i know cares about honour things.",
        duration: 4000,
      },
      { message: "I am explaining you now...", duration: 3000 },
      {
        message: "If you want to pass this level, you have to lick the device",
        duration: 5000,
      },
      { message: "AHAHAHAHAHAHAAHAH", duration: 1500 },
      { message: "What are you going to do huh!?", duration: 3000 },
      {
        message:
          "Will you lick the device and throw out your honour and selfrespect for a mere level?",
        duration: 5500,
      },
      { message: "Lick it!, lick it!, lick it!", duration: 2000 },
      { message: "I want to see you licking it!!!", duration: 3000 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <LickitAd />
    </Box>
  ) : null;
}
