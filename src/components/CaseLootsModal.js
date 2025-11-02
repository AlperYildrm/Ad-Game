import React from "react";
import {
  Paper,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function CaseLootsModal({ caseData }) {
  if (!caseData) return null;

  const sortedLoots = [...caseData.loots].sort((a, b) => a.chance - b.chance);

  return (
    <Paper
      elevation={6}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#1e1e1e",
        color: "white",
        maxWidth: 360,
        mx: "auto",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Avatar
          src={caseData.image}
          alt={caseData.name}
          sx={{ width: 70, height: 70, mb: 1 }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {caseData.name}
        </Typography>
        <Typography variant="body2" color="gray" align="center">
          {caseData.about}
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", mb: 1 }} />

      <List dense>
        {sortedLoots.map((loot) => (
          <ListItem
            key={loot.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#2b2b2b",
              borderRadius: 2,
              my: 0.5,
              px: 2,
              py: 0.8,
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            <ListItemText
              primary={loot.name}
              primaryTypographyProps={{ color: "white", fontSize: 15 }}
            />
            <Typography variant="body2" color="gray">
              {loot.chance}%
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default CaseLootsModal;
