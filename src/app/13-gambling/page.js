"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import CaseNavBar from "@/components/CaseNavBar";
import CaseTemplate from "@/components/CaseTemplate";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);
  const balance = 0;

  useEffect(() => {
    const messages = [
      { message: "I...", duration: 1000 },
      { message: "I just gave up.", duration: 2500 },
      { message: "I am tired of speaking with you", duration: 3500 },
      { message: "That's it, go and skip the Ad.", duration: 3000 },
      { message: "At least if you can...", duration: 2500 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);

  return isSpoken ? (
    <Box>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <CaseNavBar balance={balance} />
      </Box>
      <Box sx={{ mt: 8, p: 2 }}>
        <CaseTemplate balance={balance} />
      </Box>
    </Box>
  ) : null;
}
