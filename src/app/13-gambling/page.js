"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import CaseNavBar from "@/components/CaseNavBar";
import CaseTemplate from "@/components/CaseTemplate";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "", duration: 1000 },
      { message: "Oh, a visitor!", duration: 1000 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <CaseNavBar />
      </Box>
      <Box sx={{ mt: 8, p: 2 }}>
        <CaseTemplate />
      </Box>
    </Box>
  ) : null;
}
