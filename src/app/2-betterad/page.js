"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import SauAd from "@/ads/SauAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Huh? Why did you close the Ad?", duration: 2750 },
      { message: "Oh, you are right.", duration: 1500 },
      {
        message: "How stupid i am...",
        duration: 2000,
      },
      {
        message: "Of course i should not have shown a mere bet site Ad",
        duration: 3500,
      },
      { message: "TO MY PRECIOUS DEAR VISITOR", duration: 3000, type: "angry" },
      {
        message: "Wait a minute please, i will fix it right now!",
        duration: 2500,
      },
      { message: "Where did i put it... Hmm...", duration: 3000 },
      { message: "Ah, here it is!", duration: 2000, type: "discovery" },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <SauAd />
    </Box>
  ) : null;
}
