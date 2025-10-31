"use client";

import React from "react";
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
  Chip,
  Modal,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import MyphonePlusModal from "./MyphonePlusModal";
import { useState } from "react";

export default function AccountModal() {
  const [openPlus, setOpenPlus] = useState(false);
  const handleOpenPlus = () => setOpenPlus(true);
  const HandleClosePlus = () => setOpenPlus(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        width: 420,
        borderRadius: 4,
        textAlign: "center",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Account Information
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Manage your account securely.(as if we never know)
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Stack spacing={3} alignItems="flex-start" sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <EmailIcon sx={{ mr: 1, color: "primary.main" }} />
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            size="small"
            value="joemama67@hotmail.com"
            InputProps={{ readOnly: true }}
          />
          <Typography
            variant="body2"
            color="primary"
            fontStyle="italic"
            sx={{ ml: 1 }}
          >
            Verified
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <LockIcon sx={{ mr: 1, color: "primary.main" }} />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            size="small"
            type={isPasswordVisible ? "readonly" : "password"}
            value={isPasswordVisible ? "NiceTryButNo" : "********"}
            InputProps={{ readOnly: true }}
          />
          <Button variant="text" color="primary" sx={{ ml: 1 }}>
            {isPasswordVisible ? (
              <VisibilityIcon onClick={togglePasswordVisibility} />
            ) : (
              <VisibilityOffIcon onClick={togglePasswordVisibility} />
            )}
          </Button>
        </Box>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <Stack spacing={2} alignItems="center" mb={3}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CalendarMonthIcon sx={{ color: "primary.main", mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Joined: <strong>May 2024</strong>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "primary.main", mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Plan: <strong>MYPHONE Free (U poor)</strong>
          </Typography>
        </Box>

        <Chip
          label="Upgrade to MYPHONE+"
          clickable
          color="primary"
          onClick={handleOpenPlus}
          variant="outlined"
          sx={{
            borderRadius: 3,
            cursor: "pointer",
            "&.MuiChip-clickable:hover": {
              bgcolor: "primary.main",
              color: "white",
              borderColor: "primary.main",
            },
          }}
        />
      </Stack>
      <Modal
        open={openPlus}
        onClose={HandleClosePlus}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyphonePlusModal />
      </Modal>
    </Paper>
  );
}
