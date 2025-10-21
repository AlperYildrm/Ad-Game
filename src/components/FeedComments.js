"use client";
import { Modal } from "@mui/material";
import MyphonePlusModal from "./MyphonePlusModal";
import * as React from "react";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function FeedComments({ comments }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 3,
        maxWidth: 600,
        mx: "auto",
        mt: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", color: blueGrey[800] }}
      >
        Comments
      </Typography>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 3 }}>
        <Avatar sx={{ bgcolor: blueGrey[500] }}>Y</Avatar>
        <Box sx={{ flex: 1 }}>
          <TextField
            placeholder="Write a comment..."
            variant="outlined"
            fullWidth
            multiline
            maxRows={3}
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                padding: "6px 12px",
              },
            }}
          />
        </Box>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            borderRadius: 5,
            textTransform: "none",
            backgroundColor: blueGrey[700],
            "&:hover": { backgroundColor: blueGrey[800] },
          }}
        >
          Post
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
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
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box>
        {comments.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <Avatar sx={{ bgcolor: blueGrey[400] }}>
              {comment.name.charAt(0)}
            </Avatar>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                px: 2,
                py: 1.2,
                boxShadow: 0.5,
                maxWidth: "85%",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: blueGrey[900] }}
              >
                {comment.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: blueGrey[800], whiteSpace: "pre-wrap" }}
              >
                {comment.text}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: blueGrey[500],
                alignSelf: "flex-end",
                ml: 1,
                fontSize: "0.75rem",
              }}
            >
              {comment.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
