import React, { useState } from "react";
import { Box, Paper, Typography, IconButton, InputBase } from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Refresh,
  Close,
  Search,
  StarBorder,
  Lock,
  Add,
  MoreHoriz,
} from "@mui/icons-material";

function BrowserApp() {
  const [url, setUrl] = useState("https://www.binge.com");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "#202020",
          pt: 1,
          px: 1,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            bgcolor: "#333",
            color: "white",
            borderRadius: "8px 8px 0 0",
            px: 2,
            py: 0.8,
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: 240,
            position: "relative",
            boxShadow: "0 -1px 5px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ flex: 1, fontSize: "0.75rem" }}
            noWrap
          >
            Binge
          </Typography>
          <Close
            sx={{
              fontSize: 14,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
              },
            }}
          />
        </Box>
        <IconButton size="small" sx={{ color: "white", mb: 0.5, ml: 0.5 }}>
          <Add fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          bgcolor: "#333",
          p: 0.8,
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderBottom: "1px solid #111",
        }}
      >
        <IconButton size="small" disabled sx={{ color: "#aaa" }}>
          <ArrowBack fontSize="small" />
        </IconButton>
        <IconButton size="small" disabled sx={{ color: "#aaa" }}>
          <ArrowForward fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: "white" }}>
          <Refresh fontSize="small" />
        </IconButton>

        <Paper
          component="form"
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            bgcolor: "#1f1f1f",
            borderRadius: 5,
            border: "1px solid #555",
            px: 1.5,
            py: 0,
            height: 30,
            boxShadow: "none",
            "&:focus-within": {
              border: "1px solid #60cdff",
              bgcolor: "#000",
            },
          }}
        >
          <Lock sx={{ fontSize: 12, color: "#aaa", mr: 1 }} />
          <InputBase
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ flex: 1, color: "white", fontSize: "0.8rem", pb: 0.2 }}
          />
          <StarBorder sx={{ fontSize: 16, color: "#aaa", cursor: "pointer" }} />
        </Paper>

        <Typography
          variant="caption"
          sx={{
            color: "white",
            mx: 1,
            fontWeight: "bold",
            border: "1px solid white",
            borderRadius: 1,
            px: 0.5,
            fontSize: "0.6rem",
          }}
        >
          Codriver
        </Typography>
        <IconButton size="small" sx={{ color: "white" }}>
          <MoreHoriz fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          bgcolor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.2)" }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: 650,
              px: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Segoe UI",
              }}
            >
              Binge
            </Typography>

            <Paper
              sx={{
                width: "100%",
                p: 0.5,
                pl: 2,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <InputBase
                placeholder="Search the web..."
                sx={{ flex: 1, fontSize: "1rem" }}
              />
              <IconButton size="large" sx={{ color: "primary.main", mr: 0.5 }}>
                <Search />
              </IconButton>
              <IconButton
                size="large"
                sx={{ color: "text.secondary", mr: 0.5 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </IconButton>
            </Paper>

            <Box sx={{ mt: 4, display: "flex", gap: 4 }}>
              {["Weather", "News", "Ads", "Marketing"].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "white",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ position: "absolute", bottom: 20, right: 20, zIndex: 2 }}>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.8)",
                textShadow: "0 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              Daily Image: Random Blacksea Region View
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BrowserApp;
