"use client";

import {
  Box,
  Button,
  Paper,
  Switch,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function FeedbackModal() {
  const [switched, setSwitched] = useState(false);
  const [answer, setAnswer] = useState("no");
  const router = useRouter();

  const handleSwitch = () => {
    setSwitched((prev) => !prev);
  };

  const handleSubmit = () => {
    router.push("/5-timeout");
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Do you enjoy my Ads?
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {!switched ? (
          <>
            <Typography
              variant="h6"
              sx={{ color: "green", fontWeight: "bold" }}
            >
              Yes
            </Typography>
            <Switch checked={switched} onChange={handleSwitch} />
            <Typography variant="h6" sx={{ color: "gray" }}>
              No
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ color: "gray" }}>
              No
            </Typography>
            <Switch checked={switched} onChange={handleSwitch} />
            <Typography
              variant="h6"
              sx={{ color: "green", fontWeight: "bold" }}
            >
              Yes
            </Typography>
          </>
        )}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Will you close my Ads again?
        </Typography>
        <Select fullWidth value="no" onChange={() => {}}>
          <MenuItem value="yes">
            Yes, I will close them again and again without a reason because I am
            stupid and do not care anyone but myself.
          </MenuItem>
          <MenuItem value="no">
            No, of course I will not close them anymore. I will view your Ads
            willingly.
          </MenuItem>
        </Select>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </Box>
    </Paper>
  );
}

export default FeedbackModal;
