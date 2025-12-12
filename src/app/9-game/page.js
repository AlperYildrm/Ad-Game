"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import BlackAd from "@/ads/BlackAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Okey, okey...", duration: 2000, type: "discovery" },
      { message: "You got me.", duration: 2000 },
      {
        message: "I admit, i cannot really close the close button.",
        duration: 3500,
      },
      {
        message: "If i do that, Googel Adnonsense stops giving Ads to me.",
        duration: 4000,
      },
      {
        message:
          "But as long as i can leave close button, there is no problem.",
        duration: 4500,
      },
      {
        message: "That means, i can piss you off by making it complicated.",
        duration: 4000,
      },
      { message: "So, i have an idea.", duration: 2000 },
      {
        message: "There was a game titled 'The World's Hardest Game'",
        duration: 3500,
      },
      {
        message:
          "Back in the day, it really pissed me off. Especially that level...",
        duration: 4500,
      },
      {
        message:
          "Anyway i talked so much. I am really can't wait watching your suffer eheheheh.",
        duration: 5000,
        type: "happy",
      },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
      <BlackAd />
    </Box>
  ) : null;
}
