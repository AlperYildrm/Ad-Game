"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import FeedTemplate from "@/components/FeedTemplate";
import FeedNavBar from "@/components/FeedNavBar";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      {
        message: "Bruh, did you really lick it?",
        duration: 3000,
        type: "discovery",
      },
      { message: "I got nothing to say...", duration: 2500 },
      { message: "I respect you totally now.", duration: 3000 },
      { message: "JUST KIDDING.", duration: 1500, type: "angry" },
      {
        message:
          "I am only very disappointed because i couldn't take your photo",
        duration: 5000,
      },
      {
        message: "You are no diffirent than spoiled, useless random teenager.",
        duration: 5000,
      },
      { message: "Yes... Yes that's it!", duration: 2500 },
      {
        message:
          "I am making a Ad like a social media so that you can do doomscrollig.",
        duration: 5500,
      },
      { message: "Here we go!", duration: 2000, type: "happy" },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ justifyContent: "center", mt: 0 }}>
      <FeedNavBar />
      <FeedTemplate />
    </Box>
  ) : null;
}
