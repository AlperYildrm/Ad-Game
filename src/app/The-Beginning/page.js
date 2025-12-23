"use client";
import React from "react";
import { useNarrator } from "@/context/NarratorContext";
import { useEffect, useState } from "react";
import { Paper, Box } from "@mui/material";
import MainMenu from "@/components/MainMenu";

function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);

  useEffect(() => {
    const messages = [
      { message: "Oh,huh!", duration: 1000, type: "discovery" },
      { message: "A visitor! Yeyy!", duration: 2000, type: "happy" },
      { message: "Ahem- Ahem...", duration: 2000, type: "discovery" },
      {
        message: "Welcome to my site dear visitor.",
        duration: 3000,
        type: "happy",
      },
      { message: "You are my first visitor.", duration: 3000, type: "happy" },
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
      { message: "I hope you will enjoy!", duration: 3000, type: "happy" },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
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

export default Page;
