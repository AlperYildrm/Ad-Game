"use client";
import React from "react";
import DownloadSettingsModal2 from "@/components/DownloadSettingsModal2";

import { useSound } from "@/context/SoundContext";
import { Button, Box } from "@mui/material";

function page() {
  const { playSound } = useSound();

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => playSound("spin")}
        sx={{ m: 2 }}
      >
        Test Sound (Spin)
      </Button>
    </Box>
  );
}

export default page;
