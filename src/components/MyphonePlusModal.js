"use client";

import { useEffect, useState } from "react";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function MyphonePlusModal() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Upgrade to MYPHONE+
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Get the ultimate MyPhone experience.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <List dense>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Comment on posts" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Like/Share posts" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Adjust unwanted posts" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Edit your profile" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="See fewer ads" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Free trial to Narrators OnlyFridge" />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" color="primary" gutterBottom>
          $19,99 / month
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: 3, textTransform: "none", py: 1.5 }}
          onClick={() => {
            setLoading(true);
          }}
        >
          {loading ? (
            <CircularProgress size={20} color="white" />
          ) : (
            "Buy MYPHONE+"
          )}
        </Button>
      </Box>
    </Paper>
  );
}

export default MyphonePlusModal;
