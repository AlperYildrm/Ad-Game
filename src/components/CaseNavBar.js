import React from "react";
import {
  Paper,
  LinearProgress,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function CaseNavBar() {
  const money = 0.0;

  return (
    <Paper
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10vh",
        overflow: "hidden",
        px: 3,
        pt: 1,
        borderBottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.17)",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
      elevation={3}
    >
      <img
        src="/images/casebattlinglogo.png"
        alt="Case Logo"
        style={{
          height: "20vh",
          objectFit: "contain",
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: "rgba(0, 238, 255, 0.62)",
          pr: 1,
          borderRadius: 2,
        }}
      >
        <IconButton
          onClick={() => {
            alert("U poor");
          }}
        >
          <AccountBalanceWalletIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h6" color="text.primary" fontWeight="bold">
          ${money.toFixed(1)}
        </Typography>
      </Box>

      <LinearProgress
        variant="indeterminate"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4px",
          borderRadius: 0,
          backgroundColor: "rgba(0, 238, 255, 0.62)",
          "& .MuiLinearProgress-bar": {
            animationDuration: "15s",
          },
        }}
      />
    </Paper>
  );
}

export default CaseNavBar;
