"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useNarrator } from "@/context/NarratorContext";
import CryptoAd from "@/ads/CryptoAd";

export default function Page() {
  const { showNarratorSequence } = useNarrator();
  const [isSpoken, setIsSpoken] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const messages = [
      { message: "Tch!", duration: 1000, type: "angry" },
      {
        message: "I used to spent at least 3 hours to pass this level.",
        duration: 4000,
      },
      {
        message: "You must be so lucky that easily passed the level.",
        duration: 4000,
      },
      { message: "You lucky platypus!", duration: 2500, type: "angry" },
      {
        message: "However... I want to see how much lucky you are.",
        duration: 3500,
      },
      {
        message: "Because you need to be lucky enough for next level.",
        duration: 4000,
      },
      { message: "Huh? What is this??", duration: 2000, type: "discovery" },
      {
        message: "waaaaaaa. I just saw a cat entering utility room.",
        duration: 4000,
      },
      { message: "It may cause blackout, i don't know...", duration: 4000 },
    ];

    showNarratorSequence(messages, 500, () => setIsSpoken(true));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return isSpoken ? (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          background: "linear-gradient(135deg, #4facfe, #00f2fe)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CryptoAd />
        </Box>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `radial-gradient(
            circle 65px at ${coords.x}px ${coords.y}px,
            transparent 0%,
            rgba(0,0,0,0.99) 100%
          )`,
          transition: "background 0.05s linear",
        }}
      />
    </div>
  ) : null;
}
