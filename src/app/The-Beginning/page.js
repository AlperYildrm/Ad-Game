"use client";
import React from "react";
import { useNarrator } from "@/context/NarratorContext";
import { useEffect, useState } from "react";
import { Paper, Box } from "@mui/material";
import MainMenu from "@/components/MainMenu";

function page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Oh,huh!", duration: 1000 },
      { message: "A visitor! Yeyy!", duration: 2000 },
      { message: "Ahem- Ahem...", duration: 2000 },
      { message: "Welcome to my site dear visitor.", duration: 3000 },
      { message: "You are my first visitor.", duration: 3000 },
      {
        message:
          "I may lack experience but i guarantee that you will get the best experience!",
        duration: 5000,
      },
      {
        message:
          "Because my site has no Ads! Yes, unlike other site there is no Ads.",
        duration: 4000,
      },
      { message: "I hope you will enjoy!", duration: 3000 },
    ];

    showNarratorSequence(messages);

    const totalTime = messages.reduce((acc, m) => acc + m.duration + 500, 0);
    const timer = setTimeout(() => setIsSpoken(true), totalTime);

    return () => clearTimeout(timer);
  }, []);
  return isSpoken ? (
    <Box sx={{ animation: "fadeIn 3s ease-in" }}>
      <Paper
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <MainMenu />
      </Paper>
    </Box>
  ) : null;
}

export default page;
