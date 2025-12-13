import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import { useSound } from "@/context/SoundContext";
import { useEffect } from "react";

function SettingsSettings() {
  const { playSound } = useSound();
  const handleMusic = () => playSound("bruh");
  useEffect(() => {
    handleMusic();
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <Paper elevation={3} sx={{ padding: 9, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        {t("settingssettings.header")}
      </Typography>
      <Typography variant="body1">{t("settingssettings.paragraph")}</Typography>
    </Paper>
  );
}

export default SettingsSettings;
