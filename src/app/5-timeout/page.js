"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import SocialAd from "@/ads/SocialAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Oh... Thanks god!", duration: 3000 },
      { message: "My Ads were not problematic after all.", duration: 4000 },
      {
        message:
          "In that case, there is an issue with either the site or your device.",
        duration: 5000,
      },
      {
        message:
          "Maybe your browser is clicking on close button without your permisson.",
        duration: 5500,
      },
      {
        message: "For this reason, i am putting some security steps in my Ad",
        duration: 5000,
      },
      { message: "Not to mention but it is just in case.", duration: 3500 },
      { message: "It is not like i doubt you etc.", duration: 3000 },
      { message: "I trust you so do you.", duration: 3000 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <SocialAd />
    </Box>
  ) : null;
}
