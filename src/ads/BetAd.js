"use client";

import React, { useState } from "react";
import { Box, IconButton, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import betsite from "../../public/images/betsitead.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InformationButton from "@/components/InformationButton";

function BetAd() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setLoading(true);
    router.push("/2-betterad");
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={betsite}
          alt="Bet Ad"
          width={400}
          height={250}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>

      <IconButton
        onClick={handleClose}
        disabled={loading}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(255,255,255,0.7)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,1)",
          },
          width: 40,
          height: 40,
        }}
      >
        {loading ? <CircularProgress size={20} /> : <CloseIcon />}
      </IconButton>
      <InformationButton />
    </Box>
  );
}

export default BetAd;
