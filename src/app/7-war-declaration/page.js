"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import NutzillaAd from "@/ads/NutzillaAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "OOO! You are not that fool huh!", duration: 3500 },
      { message: "Fine!", duration: 1500 },
      { message: "This is a war declaration from me to you!", duration: 5000 },
      { message: "I have infinitely many Ads in my pocket!", duration: 4000 },
      { message: "And also i will take some precautions.", duration: 4000 },
      { message: "You no longer close my Ads easily now!", duration: 4000 },
      {
        message: "Let's see whether you can continue messing with me huh!",
        duration: 4000,
      },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <NutzillaAd />
    </Box>
  ) : null;
}
