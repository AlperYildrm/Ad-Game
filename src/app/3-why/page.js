"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import Yad from "@/ads/Yad";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Again, you closed the Ad!", duration: 3000 },
      { message: "Why?", duration: 2000 },
      { message: "Why? Was it boring?", duration: 2500 },
      { message: "What did you expect? It is an Ad!", duration: 3000 },
      { message: "Of course it is not interesting or funny", duration: 4000 },
      {
        message:
          "If you don't want to view Ads, why did you come here in the first place?!",
        duration: 4500,
      },
      { message: "I will give you one more chance.", duration: 3500 },
      {
        message: "This is your last chance, please don't close it...",
        duration: 3500,
      },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Yad />
    </Box>
  ) : null;
}
