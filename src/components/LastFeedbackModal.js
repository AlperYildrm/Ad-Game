import { Paper } from "@mui/material";
import React from "react";

function LastFeedbackModal() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
      <h2>I would love reading your feedbacks but!..</h2>
      <p>
        Unfortunately, this game was developed with only react and for this
        reason all game you played was just pure front-end.
      </p>
      <p>
        Therefore, There is no back-end, server, to get and store feedbacks.
      </p>
    </Paper>
  );
}

export default LastFeedbackModal;
