"use client";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { useSound } from "@/context/SoundContext";

function Captcha() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const { playSound } = useSound();

  const handleClick = () => {
    if (verified || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
    }, 3000);
  };

  const handleRedirect = () => {
    if (verified) {
      playSound("brokenglass");
      router.push("/6-look-down");
    }
  };

  return (
    <Box
      sx={{
        border: "2px solid #ccc",
        borderRadius: 2,
        padding: 5,
        margin: 2,
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontStyle: "italic", opacity: 0.8 }}
      >
        Please verify that you are not a robot.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid #342727ff",
          borderRadius: 1,
          padding: 3,
          margin: 2,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            onClick={handleClick}
            sx={{
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: verified || loading ? "default" : "pointer",
            }}
          >
            {!verified && loading && <CircularProgress size={28} />}
            {verified && <CheckIcon color="success" fontSize="large" />}
            {!verified && !loading && (
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  border: "2px solid #555",
                  borderRadius: "4px",
                }}
              />
            )}
          </Box>
          <Typography variant="body1">I am not a robot</Typography>
        </Box>

        <Box
          sx={{
            fontSize: "0.7rem",
            color: "#777",
            textAlign: "right",
          }}
        >
          reCAPTCHA
          <br />
          <span style={{ fontSize: "0.6rem" }}>Privacy - Terms</span>
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="error"
          disabled={!verified}
          onClick={handleRedirect}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? "Break Heart" : "Destroy Ad"}
        </Button>
      </Box>
    </Box>
  );
}

export default Captcha;
