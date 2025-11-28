import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

function SettingsSettings() {
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
