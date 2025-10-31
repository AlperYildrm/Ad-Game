"use client";

import React from "react";
import {
  Paper,
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
  Stack,
  IconButton,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MyphonePlusModal from "./MyphonePlusModal";
import { useState } from "react";
import ShareModal from "./ShareModal";

export default function ProfileModal() {
  const [openPlus, setOpenPlus] = useState(false);
  const handleOpenPlus = () => setOpenPlus(true);
  const HandleClosePlus = () => setOpenPlus(false);
  const [openShare, setOpenShare] = useState(false);
  const handleOpenShare = () => setOpenShare(true);
  const HandleCloseShare = () => setOpenShare(false);
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        width: 400,
        borderRadius: 4,
        textAlign: "center",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
        <Avatar
          src="/static/images/avatar/1.jpg"
          alt="YUser Avatar"
          sx={{
            width: 100,
            height: 100,
            margin: "auto",
            border: "3px solid #1976d2",
          }}
        />
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
          }}
          onClick={handleOpenPlus}
        >
          <CameraAltIcon fontSize="small" />
        </IconButton>
      </Box>

      <Typography variant="h6" fontWeight="bold">
        Joe Mama
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        @joemama67
      </Typography>

      <Typography variant="body2" color="text.primary" mb={2}>
        “Dream big. Code harder. Get unemployed.” 💻
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        mb={3}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            0
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Followers
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            203
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Following
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            0
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Posts
          </Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          sx={{ textTransform: "none", borderRadius: 3 }}
          onClick={handleOpenPlus}
        >
          Edit Profile
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ textTransform: "none", borderRadius: 3 }}
          onClick={handleOpenShare}
        >
          Share
        </Button>
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
      <Modal
        open={openShare}
        onClose={HandleCloseShare}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ShareModal />
      </Modal>
    </Paper>
  );
}
