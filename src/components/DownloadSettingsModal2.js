import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Box,
  Modal,
  Fade,
} from "@mui/material";
import DownloadSettingsModal3 from "./DownloadSettingsModal3";

function DownloadSettingsModal2({ handleResetting }) {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const loadingMessages = [
    "Settings",
    "Settings Modal",
    "Progressor",
    "Buttons",
    "Your Brain",
    "Narrator's Hatred",
    "Google Adsense Policy",
    "Mothers Slipper",
    "Rule 35b entity Fs8B7gE",
    "Idk what prev asset mean",
    "Security Guard",
    "Some Random Asset",
    "Narrator with Indian Accent",
    "Watch Play of Thrones",
    "Accessable Data Manager",
    "Internet",
    "More Random Asset",
    "Authorization",
    "Past Mistakes",
    "Everything",
  ];

  // --- LOGIC (Kept exactly the same) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 2;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  const messageIndex = Math.min(
    Math.floor(progress / 5),
    loadingMessages.length - 1
  );
  const currentEntity = loadingMessages[messageIndex];

  useEffect(() => {
    if (progress >= 100 && !open) {
      setTimeout(() => setOpen(true), 800);
    }
  }, [progress, open]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 400,
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
          sx={{ letterSpacing: 1 }}
        >
          SETTINGS LAUNCHING
        </Typography>

        <Box sx={{ position: "relative", display: "inline-flex", my: 4 }}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={120}
            thickness={4}
            sx={{
              color: (theme) => theme.palette.grey[200],
              position: "absolute",
            }}
          />
          <CircularProgress
            variant="determinate"
            value={progress}
            size={120}
            thickness={4}
            sx={{
              color: progress === 100 ? "success.main" : "primary.main",
              transition: "color 0.5s ease",
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              color="text.secondary"
              fontWeight="bold"
            >
              {Math.round(progress)}%
            </Typography>
          </Box>
        </Box>

        <Box sx={{ height: 40 }}>
          <Fade in={true} key={currentEntity} timeout={500}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "text.primary",
                fontStyle: "italic",
              }}
            >
              Loading {currentEntity}...
            </Typography>
          </Fade>
        </Box>

        <Modal
          open={open}
          //onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DownloadSettingsModal3 handleResetting={handleResetting} />
        </Modal>
      </Paper>
    </Box>
  );
}

export default DownloadSettingsModal2;
