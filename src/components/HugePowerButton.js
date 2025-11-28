import { IconButton, Paper, Modal } from "@mui/material";
import React, { use } from "react";
import { PowerSettingsNew as PowerIcon } from "@mui/icons-material";
import { useState } from "react";
import DownloadSettingsModal from "./DownloadSettingsModal";

function HugePowerButton({ handleResetting }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        padding: 9,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton color="primary" aria-label="power" onClick={handleOpenModal}>
        <PowerIcon sx={{ fontSize: 100 }} />
      </IconButton>
      <Modal
        open={openModal}
        //onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <DownloadSettingsModal handleResetting={handleResetting} />
      </Modal>
    </Paper>
  );
}

export default HugePowerButton;
