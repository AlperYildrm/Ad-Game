"use client";

import "@/i18n";

import {
  Box,
  Button,
  Paper,
  Switch,
  Slider,
  Typography,
  Stack,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SettingsSettings from "./SettingsSettings";
import { Modal } from "@mui/material";
import { useNarrator } from "@/context/NarratorContext";
import { useTranslation } from "react-i18next";

function SettingsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { showNarratorSequence } = useNarrator();

  const { t, i18n } = useTranslation();

  const { durationScale, setDurationScale } = useNarrator();

  const changeLanguage = (lang) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(lang);
    } else {
      console.error("i18n henüz yüklenmedi");
    }
  };

  const handleSpeedChange = (event, newValue) => {
    setDurationScale(newValue);

    const messages = [
      { message: "Hi, i am your beloved narrator!", duration: 2000 },
      newValue > 1.3
        ? {
            message: "Are you serious? Are you a turtle reader or what?",
            duration: 3000,
          }
        : newValue < 0.8
        ? {
            message:
              "Really you are okay with going this fast? I bet you won't even listen me.",
            duration: 3000,
          }
        : { message: "Yes, you are ready to go!", duration: 2000 },
    ];

    showNarratorSequence(messages);
  };

  const currentLang = i18n?.language || "en";

  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center", width: 300 }}>
      <Box sx={{ mb: 3 }}>
        <ButtonGroup
          variant="outlined"
          aria-label="language selector"
          size="small"
        >
          <Button
            onClick={() => changeLanguage("en")}
            variant={currentLang === "en" ? "contained" : "outlined"}
          >
            EN
          </Button>
          <Button
            onClick={() => changeLanguage("tr")}
            variant={currentLang === "tr" ? "contained" : "outlined"}
          >
            TR
          </Button>
        </ButtonGroup>
      </Box>

      <Button
        variant="text"
        color="primary"
        size="small"
        sx={{ mt: 2 }}
        onClick={handleOpen}
      >
        {t("settings.more_settings")}
      </Button>

      <br />
      <br />

      <Box sx={{ mb: 2 }}>
        <Typography id="narrator-speed-slider" gutterBottom variant="caption">
          {t("settings.speed_label")} ({durationScale}x)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="caption">{t("settings.fast")}</Typography>
          <Slider
            value={durationScale}
            min={0.5}
            max={2.0}
            step={0.1}
            onChange={handleSpeedChange}
            aria-labelledby="narrator-speed-slider"
          />
          <Typography variant="caption">{t("settings.slow")}</Typography>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ outline: "none" }}>
          <SettingsSettings />
        </Box>
      </Modal>
    </Paper>
  );
}

export default SettingsModal;
