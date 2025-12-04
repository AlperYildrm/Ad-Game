"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Modal,
} from "@mui/material";
import {
  RotateCcw,
  Home,
  FastForward,
  SkipForward,
  Github,
  Twitter,
  Heart,
} from "lucide-react";
import FinalWordsModal from "@/components/FinalWordsModal";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#111111",
    },
    primary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 24px",
          letterSpacing: "0.1em",
          fontWeight: 700,
        },
      },
    },
  },
});

const EndMenu = ({ onReplay }) => {
  const [openDevModal, setOpenDevModal] = useState(false);
  const handleCloseDevModal = () => setOpenDevModal(false);
  const handeOpenDevModal = () => setOpenDevModal(true);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "common.white",
        animation: "fadeIn 2s ease-in",
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "5rem", md: "7rem" },
              background:
                "linear-gradient(135deg, #7986cb 0%, #ba68c8 50%, #f06292 100%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.5))",
            }}
          >
            FIN
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "grey.500", fontStyle: "italic", fontSize: "1.2rem" }}
          >
            "That's it, no more ads. The End..."
          </Typography>

          <Stack spacing={2} width="100%" sx={{ pt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={onReplay}
              startIcon={<RotateCcw size={20} />}
              sx={{
                bgcolor: "white",
                color: "black",
                "&:hover": { bgcolor: "grey.300" },
              }}
            >
              Replay Story
            </Button>

            <Button
              onClick={handeOpenDevModal}
              variant="outlined"
              color="primary"
              size="large"
              sx={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Dev's Final Words
            </Button>
          </Stack>

          <Typography variant="caption" sx={{ color: "grey.700", pt: 6 }}>
            AdGame by Alper YILDIRIM
          </Typography>
        </Stack>
      </Container>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <Modal
        open={openDevModal}
        onClose={handleCloseDevModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FinalWordsModal />
      </Modal>
    </Box>
  );
};

const CreditScene = ({ onComplete }) => {
  const scrollRef = useRef(null);
  const [isSpeedingUp, setIsSpeedingUp] = useState(false);

  const credits = [
    { role: "Developer", names: ["Alper YILDIRIM"] },
    { role: "Idea Owner", names: ["Alper YILDIRIM"] },
    { role: "Story & Narrative", names: ["Alper YILDIRIM", "The Narrator"] },
    { role: "Ad's Source", names: ["Alper YILDIRIM, Sora"] },
    { role: "3D Modelling", names: ["Was there any 3D model??"] },
    { role: "Sounds & Music", names: ["Alper YILDIRIM", "Audocity"] },
    {
      role: "Voice Acting",
      names: ["Alper YILDIRIM", "The Narrator"],
    },
    {
      role: "Quality Assurance",
      names: [
        "Tester Kürşat Kerem ÇEVLIK",
        "Tester Ismail Kerem ERKUL",
        "And Other Early Access Players",
      ],
    },
    {
      role: "Special Thanks",
      names: ["Myself", "Gemini & ChatGPT", "Again Myself", "You, the Player"],
    },
    { role: "Extras", names: ["..."] },
  ];

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleAnimationEnd = () => onComplete();
    element.addEventListener("animationend", handleAnimationEnd);
    const timeout = setTimeout(onComplete, 60500);

    return () => {
      element.removeEventListener("animationend", handleAnimationEnd);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        bgcolor: "black",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          right: 32,
          zIndex: 50,
          display: "flex",
          gap: 2,
          opacity: 0.4,
          transition: "opacity 0.3s",
          "&:hover": { opacity: 1 },
        }}
      >
        <Button
          variant="outlined"
          onClick={onComplete}
          startIcon={<SkipForward size={16} />}
          sx={{
            borderRadius: 50,
            borderColor: "rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "0.75rem",
          }}
        >
          SKIP
        </Button>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 12,
          top: "100vh",
          animationName: "scrolling-credits",
          animationDuration: isSpeedingUp ? "10s" : "60s",
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
        }}
      >
        <Box sx={{ mb: 12, textAlign: "center", px: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              mb: 2,
              background: "linear-gradient(to bottom, #ffffff, #757575)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
            }}
          >
            The End
          </Typography>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: "0.5em",
              color: "grey.500",
              textTransform: "uppercase",
            }}
          >
            Thank You For Playing
          </Typography>
        </Box>

        {credits.map((section, index) => (
          <Box
            key={index}
            sx={{
              mb: 8,
              textAlign: "center",
              maxWidth: "600px",
              width: "100%",
              px: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "grey.500",
                mb: 2,
                borderBottom: "1px solid #333",
                pb: 1,
                display: "inline-block",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {section.role}
            </Typography>
            <Stack spacing={1}>
              {section.names.map((name, nameIndex) => (
                <Typography
                  key={nameIndex}
                  variant="h4"
                  sx={{ fontWeight: 300, letterSpacing: "0.05em" }}
                >
                  {name}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}

        <Stack
          alignItems="center"
          spacing={3}
          sx={{ mt: 16, mb: 6, opacity: 0.8 }}
        >
          <Box sx={{ animation: "pulse 2s infinite" }}>
            <Heart color="#e53935" fill="#e53935" size={48} />
          </Box>
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            Made with React & Material UI
          </Typography>
          <Stack direction="row" spacing={3}>
            <IconButton sx={{ color: "white" }}>
              <a href="https://github.com/AlperYildrm/Ad-Game" target="_blank">
                <Github />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#29b6f6" }}>
              <a
                href="https://www.youtube.com/watch?v=qthxa7m_B4E"
                target="_blank"
              >
                <Twitter />
              </a>
            </IconButton>
          </Stack>
        </Stack>

        <Box sx={{ height: "100vh" }} />
      </Box>
      <style>{`
        @keyframes scrolling-credits {
          0% { transform: translateY(0); }
          100% { transform: translateY(-160%); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </Box>
  );
};

export default function Page() {
  const [gameState, setGameState] = useState("credits");

  const handleCreditsComplete = () => setGameState("menu");
  const handleReplay = () => setGameState("credits");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {gameState === "credits" && (
        <CreditScene onComplete={handleCreditsComplete} />
      )}
      {gameState === "menu" && <EndMenu onReplay={handleReplay} />}
    </ThemeProvider>
  );
}
