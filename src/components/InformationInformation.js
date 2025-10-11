import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Modal, Typography } from "@mui/material";
import WhyModal from "./WhyModal";
import { useRouter } from "next/navigation";

function InformationInformation() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePage = () => {
    router.push("/8-let-it-slide");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        height: 600,
        borderRadius: "8px",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
        padding: 3,
        pt: 5,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ opacity: 0.8 }}>
        Ads by Googel
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mb: 1 }}
        onClick={handlePage}
      >
        Stop seeing this ad
      </Button>
      <Button variant="outlined" color="primary" fullWidth onClick={handleOpen}>
        Why this ad?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <WhyModal />
      </Modal>
    </Box>
  );
}

export default InformationInformation;
