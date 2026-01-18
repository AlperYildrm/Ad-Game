import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

function LogoutModal({ HandleCloseLogout }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleLogout = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    if (password === "BGH") {
      setSuccess("Successfully logged out!");
      setError("");
      setPassword("");
      setConfirmPassword("");
      router.push("/13-gambling");
    } else {
      setError("Incorrect password. Please try again.");
      setSuccess("");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          textAlign: "center",
          width: 350,
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        <IconButton
          onClick={HandleCloseLogout}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Logout
        </Typography>

        <Typography sx={{ mb: 1, fontStyle: "italic", fontSize: 13 }}>
          Please enter your password to confirm logout.
        </Typography>

        <Typography sx={{ fontSize: 3.5 }}>
          Hint: Your password is alphabetical order of the initial letters of
          commenters name who say true in the posts. (in upcase vers.)
        </Typography>

        <TextField
          label="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          margin="normal"
          error={!!error}
          helperText={error}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          fullWidth
          sx={{
            mt: 2,
            py: 1.2,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#1976d2",
              transform: "scale(1.03)",
              transition: "0.2s",
            },
          }}
        >
          Logout
        </Button>

        {success && (
          <Typography sx={{ mt: 2, color: "green", fontWeight: "bold" }}>
            {success}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default LogoutModal;
