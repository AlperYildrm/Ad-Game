"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import WindowAd from "@/ads/WindowAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [{ message: "I am speechless...", duration: 2000 }];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <WindowAd />
    </Box>
  ) : null;
}
