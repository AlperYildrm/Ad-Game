"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import BetAd from "@/ads/BetAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "", duration: 1000 },
      { message: "Oh, a visitor!", duration: 2000 },
      { message: "Welcome my dear visitor.", duration: 3000 },
      { message: "Thank you for choosing viewing our Ads.", duration: 4000 },
      {
        message: "Thanks to you, I can make my clients happy.",
        duration: 4000,
      },
      { message: "If you want to support me more", duration: 3000 },
      { message: "You can click on the Ads...", duration: 3000 },
      { message: "Again, Thank you!", duration: 2000 },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <BetAd />
    </Box>
  ) : null;
}
