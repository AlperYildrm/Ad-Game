import { Paper } from "@mui/material";
import React from "react";
import FeedPost from "./FeedPost";

function FeedTemplate() {
  return (
    <Paper
      elevation={8}
      sx={{
        padding: 3,
        //pl: 7,
        textAlign: "center",
        margin: "20px auto",
        mt: 0,
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
      }}
    >
      <Paper
        elevation={5}
        sx={{ padding: 0, alignItems: "center", justifyContent: "center" }}
      >
        <FeedPost />
      </Paper>
      <br />
      <br />
      <Paper
        elevation={5}
        sx={{ padding: 0, alignItems: "center", justifyContent: "center" }}
      >
        <FeedPost />
      </Paper>
      <br />
      <br />
      <Paper
        elevation={5}
        sx={{ padding: 0, alignItems: "center", justifyContent: "center" }}
      >
        <FeedPost />
      </Paper>
      <br />
      <br />
    </Paper>
  );
}

export default FeedTemplate;
