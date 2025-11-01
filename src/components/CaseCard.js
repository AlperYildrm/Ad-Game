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

function CaseCard({ caseData }) {
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
            <Button size="small">Open</Button>
            <Button size="small">Loot Detail</Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
}

export default CaseCard;
