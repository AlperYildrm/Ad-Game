import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

function LickConfirmModal({ closeModal }) {
  const router = useRouter();
  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center", width: 450 }}>
      <Typography variant="h6" gutterBottom>
        Did you lick the device?
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        To be honest, the device cannot really tell being licked.
      </Typography>
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth
        onClick={() => router.push("/12-feed")}
      >
        Yes
      </Button>
      <Button
        variant="contained"
        color="error"
        size="large"
        fullWidth
        onClick={closeModal}
        sx={{ mt: 2 }}
      >
        No
      </Button>
    </Paper>
  );
}

export default LickConfirmModal;
