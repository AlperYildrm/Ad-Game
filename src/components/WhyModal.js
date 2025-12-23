import React from "react";
import { Paper, Typography } from "@mui/material";

function WhyModal() {
  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center", width: 450 }}>
      <Typography variant="h6" gutterBottom>
        Because it's Nutzilla!
      </Typography>
      <Typography variant="body1">
        {`Just because it is on the Ad does not mean the product is hyped or scam!
        Have you ever tried Nutzilla? Of course not, otherwise you wouldn't be
        asking "Why?" in the first place! Do not be biased please. Think about
        the effort that goes into collecting the nuts, sorting the good ones
        from the bad ones, etc. Just thinking about it makes this Nutzilla
        delicious!`}
      </Typography>
    </Paper>
  );
}

export default WhyModal;
