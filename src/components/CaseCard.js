import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Paper,
} from "@mui/material";
import { Modal } from "@mui/material";
import { useState } from "react";
import CaseLootsModal from "./CaseLootsModal";
import CaseOpenModal from "./CaseOpenModal";

function CaseCard({ caseData, balance }) {
  const [openLoot, setOpenLoot] = useState(false);
  const handleOpenLoot = () => setOpenLoot(true);
  const handleCloseLoot = () => setOpenLoot(false);
  const [openCase, setOpenCase] = useState(false);
  const handleOpenCase = () => setOpenCase(true);
  const handleCloseCase = () => setOpenCase(false);

  return (
    <Grid item xs={12} sm={6} md={4} key={caseData.id}>
      <Paper elevation={6}>
        <Card sx={{ width: "100%", maxWidth: 280, margin: "auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={caseData.image}
            title={caseData.name}
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {caseData.name}
            </Typography>
            <Typography variant="h6">${caseData.price.toFixed(2)}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {caseData.about}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpenCase}>
              <b>Open</b>
            </Button>
            <Button size="small" onClick={handleOpenLoot}>
              <b>Loot Detail</b>
            </Button>
          </CardActions>
        </Card>
      </Paper>
      <Modal
        open={openLoot}
        onClose={handleCloseLoot}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CaseLootsModal caseData={caseData} />
      </Modal>
      <Modal
        open={openCase}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CaseOpenModal
          caseData={caseData}
          handleCloseCase={handleCloseCase}
          balance={balance}
        />
      </Modal>
    </Grid>
  );
}

export default CaseCard;
