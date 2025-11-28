"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import HugePowerButton from "@/components/HugePowerButton";
import Ending from "@/components/Ending";
import { useRouter } from "next/navigation";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleResetting = () => {
    setIsResetting(true);
    setTimeout(() => {
      router.push("/The-Beginning");
    }, 20000);
  };
  const router = useRouter();
  useEffect(() => {
    const messages = [
      { message: "Look, that's enough.", duration: 2500 },
      { message: "I am tired of dealing with you.", duration: 3000 },
      { message: "You also should be tired.", duration: 2500 },
      { message: "I am making an exception for you.", duration: 3000 },
      { message: "I will open the site settings.", duration: 2500 },
      {
        message:
          "Only thing you have to do is closing AdBlock-Blocker from Ad System settings",
        duration: 5000,
      },
      { message: "Do you understand?", duration: 1500 },
      {
        message: "I don't think you understand but can't be helped...",
        duration: 3500,
      },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  return isSpoken ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {isResetting ? (
        <Ending />
      ) : (
        <HugePowerButton handleResetting={handleResetting} />
      )}
    </Box>
  ) : null;
}
