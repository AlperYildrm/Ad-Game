"use client";
import React from "react";
import HardestGame from "@/components/HardestGame";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import Ending from "@/components/Ending";
import WindowAd from "@/ads/WindowAd";

function Page() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {open ? (
        <Box>
          <Ending />
        </Box>
      ) : (
        <Button onClick={() => setOpen(!open)}>Open Stopify</Button>
      )}
    </Box>
  );
}

export default Page;
