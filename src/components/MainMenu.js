import React from "react";
import { Box, Paper } from "@mui/material";
import StartButton from "./StartButton";
import SettingButton from "./SettingButton";
import DonateButton from "./DonateButton";
import RulesButton from "./RulesButton";

function MainMenu() {
  return (
    <Paper
      elevation={5}
      sx={{ padding: 6, textAlign: "center", borderRadius: 3 }}
    >
      <StartButton />
      <br />
      <br />
      <RulesButton />
      <br />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <SettingButton />
        <DonateButton />
      </Box>
    </Paper>
  );
}

export default MainMenu;
