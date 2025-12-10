import React, { useState, useEffect } from "react";
import { Paper, Typography, Box, Button, Modal } from "@mui/material";
import DownloadSettingsModal4 from "./DownloadSettingsModal4";
import { useNarrator } from "@/context/NarratorContext";

function DownloadSettingsModal3({ handleResetting }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { showNarratorSequence } = useNarrator();

  useEffect(() => {
    const messages = [
      {
        message:
          "And so the narrator had assigned it an extra secret pin number",
        duration: 5000,
        type: "stanley",
      },
      { message: "2 4 8 5", duration: 4000, type: "stanley" },
      {
        message: "But of course user couldn't possibly have know this",
        duration: 3000,
        type: "stanley",
      },
    ];

    showNarratorSequence(messages);
  }, []);

  const SECRET_PIN = "2485";

  const handleNumberClick = (num) => {
    if (pin.length < 4) {
      setError(false);
      setPin((prev) => prev + num);
    }
  };

  const handleClear = () => {
    setPin("");
    setError(false);
  };

  const handleSubmit = () => {
    if (pin === SECRET_PIN) {
      setTimeout(() => {
        setOpen(true);
      }, 200);
    } else {
      setError(true);
      setPin("");
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
      handleSubmit();
    }
  }, [pin]);

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: 320,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 4,
          animation: error ? "shake 0.5s" : "none",
          "@keyframes shake": {
            "0%": { transform: "translateX(0)" },
            "25%": { transform: "translateX(-10px)" },
            "50%": { transform: "translateX(10px)" },
            "75%": { transform: "translateX(-10px)" },
            "100%": { transform: "translateX(0)" },
          },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          SECURITY PIN
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          {[0, 1, 2, 3].map((index) => (
            <Box
              key={index}
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "2px solid",
                borderColor: error ? "error.main" : "primary.main",
                bgcolor:
                  pin.length > index
                    ? error
                      ? "error.main"
                      : "primary.main"
                    : "transparent",
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            mb: 2,
            justifyItems: "center",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <KeypadButton
              key={num}
              onClick={() => handleNumberClick(num.toString())}
            >
              {num}
            </KeypadButton>
          ))}

          <Button
            fullWidth
            color="error"
            onClick={handleClear}
            sx={{ height: 60, width: 60, borderRadius: "50%" }}
          >
            CLR
          </Button>

          <KeypadButton onClick={() => handleNumberClick("0")}>0</KeypadButton>

          <Box />
        </Box>

        {error && (
          <Typography color="error" variant="caption" sx={{ mt: 1 }}>
            INCORRECT PIN
          </Typography>
        )}
      </Paper>

      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={24}
          sx={{
            width: { xs: "95%", md: "80%" },
            height: { xs: "90%", md: "80%" },
            maxWidth: 1200,
            bgcolor: "#202020",
            border: "1px solid #444",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            outline: "none",
          }}
        >
          <Box sx={{ outline: "none" }}>
            <DownloadSettingsModal4 handleResetting={handleResetting} />
          </Box>
        </Paper>
      </Modal>
    </>
  );
}

const KeypadButton = ({ children, onClick }) => (
  <Button
    variant="outlined"
    onClick={onClick}
    sx={{
      height: 60,
      width: 60,
      borderRadius: "50%",
      fontSize: "1.2rem",
      color: "text.primary",
      borderColor: "divider",
      "&:hover": {
        borderColor: "primary.main",
        bgcolor: "action.hover",
      },
    }}
  >
    {children}
  </Button>
);

export default DownloadSettingsModal3;
