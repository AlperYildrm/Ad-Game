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
      { message: "", duration: 1000 },
      { message: "Oh, a visitor!", duration: 2000 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box sx={{ justifyContent: "center", mt: 0 }}>
      <FeedNavBar />
      <FeedTemplate />
    </Box>
  ) : null;
}
