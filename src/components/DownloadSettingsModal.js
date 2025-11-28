import { Paper, Typography, Modal } from "@mui/material";
import React, { useState, useEffect } from "react";
import SettingsProgressor from "./SettingsProgressor";
import DownloadSettingsModal2 from "./DownloadSettingsModal2";

function DownloadSettingsModal({ handleResetting }) {
  const [open, setOpen] = useState(false);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);
  const handleClose = () => setOpen(false);

  const downloadItems = [
    { label: "System Files", color: "primary" },
    { label: "Ad Data", color: "secondary" },
    { label: "Narrator's lines", color: "success" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValues((oldProgress) => {
        if (oldProgress.every((val) => val >= 100)) {
          clearInterval(timer);
          return oldProgress;
        }

        return oldProgress.map((old) => {
          if (old >= 100) return 100;
          const diff = Math.random() * 10;
          return Math.min(old + diff, 100);
        });
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const allFinished = progressValues.every((val) => val >= 100);

    if (allFinished) {
      const timeout = setTimeout(() => {
        setOpen(true);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progressValues]);

  return (
    <Paper
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 350,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Site Settings
      </Typography>

      <ul style={{ width: "100%", padding: 0, margin: 0 }}>
        {downloadItems.map((item, index) => (
          <SettingsProgressor
            key={index}
            label={item.label}
            color={item.color}
            progress={progressValues[index]}
          />
        ))}
      </ul>

      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <DownloadSettingsModal2 handleResetting={handleResetting} />
      </Modal>
    </Paper>
  );
}

export default DownloadSettingsModal;
