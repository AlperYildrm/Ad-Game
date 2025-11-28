"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import FeedbackButton from "@/components/FeedbackButton";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Hmm... Interesting.", duration: 1500 },
      { message: "Let me think for a while...", duration: 3000 },
      { message: "", duration: 5000 },
      { message: "Perhaps...", duration: 2000 },
      {
        message:
          "There is another problem that is not caused by type of my Ads. ",
        duration: 5000,
      },
      { message: "Yes, it must be this!", duration: 2500 },
      { message: "Soooo... ", duration: 2000 },
      {
        message:
          "I am making a feedback system so that i can check whether you like my Ads or not.",
        duration: 5000,
      },
      {
        message:
          "Wait a little bit please, i am going to put a box in the middle of the screen. ",
        duration: 5000,
      },
      { message: "You can give your feedback there.", duration: 3000 },
      { message: "3", duration: 1000 },
      { message: "2", duration: 1000 },
      { message: "1", duration: 1000 },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <FeedbackButton />
    </Box>
  ) : null;
}
