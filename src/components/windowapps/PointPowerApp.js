import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Divider,
  Slider,
} from "@mui/material";
import {
  Save,
  Undo,
  Redo,
  Slideshow,
  ContentPaste,
  AddBox,
  Dashboard,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatListBulleted,
  FormatListNumbered,
  KeyboardArrowDown,
  TextFields,
  Image,
  Category,
  Description,
  ViewModule,
  Web,
  Remove,
  Add,
  ArrowRight,
} from "@mui/icons-material";

function PointPowerApp() {
  const ribbonIconSx = { color: "#444" };
  const slides = [1, 2, 3, 4, 5];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "#f3f2f1",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "#c43e1c",
          height: 48,
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small" sx={{ color: "white" }}>
            <Save fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", opacity: 0.5 }}>
            <Undo fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", opacity: 0.5 }}>
            <Redo fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white" }}>
            <Slideshow fontSize="small" />
          </IconButton>
        </Box>
        <Typography
          variant="caption"
          sx={{
            color: "white",
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Presentation1 - PointPower
        </Typography>
        <Box sx={{ width: 100 }} />
      </Box>

      <Box sx={{ bgcolor: "#c43e1c", px: 1 }}>
        <Box sx={{ display: "flex", gap: 0 }}>
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "4px 4px 0 0",
              bgcolor: "#f3f2f1",
              color: "#c43e1c",
              fontWeight: "bold",
              px: 2,
              "&:hover": { bgcolor: "#f3f2f1" },
            }}
          >
            Home
          </Button>
          {[
            "File",
            "Insert",
            "Draw",
            "Design",
            "Transitions",
            "Animations",
            "Slide Show",
            "Record",
            "Review",
            "View",
          ].map((tab) => (
            <Button
              key={tab}
              sx={{ color: "white", textTransform: "none", px: 2 }}
            >
              {tab}
            </Button>
          ))}
        </Box>
      </Box>

      <Paper
        square
        sx={{
          height: 100,
          bgcolor: "#f3f2f1",
          color: "#333",
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 2,
          borderBottom: "1px solid #e0e0e0",
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <IconButton size="large">
            <ContentPaste fontSize="large" sx={{ color: "#c43e1c" }} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.65rem", color: "#666" }}
          >
            Paste
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "60%", my: "auto" }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton size="small" sx={ribbonIconSx}>
              <AddBox fontSize="small" />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.8rem", fontWeight: "bold", mt: 0.5 }}
            >
              New Slide
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <IconButton size="small" sx={ribbonIconSx}>
              <Dashboard fontSize="small" />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.7rem", color: "#444" }}
            >
              Layout
            </Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "60%", my: "auto" }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Paper
              sx={{
                px: 1,
                display: "flex",
                alignItems: "center",
                width: 120,
                height: 24,
                border: "1px solid #ccc",
                bgcolor: "white",
              }}
            >
              <Typography variant="caption" sx={{ color: "black" }}>
                Calibri Light
              </Typography>
              <KeyboardArrowDown
                sx={{ ml: "auto", fontSize: 14, color: "#666" }}
              />
            </Paper>
            <Paper
              sx={{
                px: 1,
                display: "flex",
                alignItems: "center",
                width: 40,
                height: 24,
                border: "1px solid #ccc",
                bgcolor: "white",
              }}
            >
              <Typography variant="caption" sx={{ color: "black" }}>
                60
              </Typography>
              <KeyboardArrowDown
                sx={{ ml: "auto", fontSize: 14, color: "#666" }}
              />
            </Paper>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              sx={{ bgcolor: "#e0e0e0", borderRadius: 1, color: "black" }}
            >
              <FormatBold fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatItalic fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatUnderlined fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ ...ribbonIconSx, opacity: 0.3 }}>
              S
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 16, my: "auto", mx: 1 }}
            />
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatListBulleted fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatListNumbered fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "60%", my: "auto" }}
        />

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton size="medium" sx={ribbonIconSx}>
              <TextFields />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.65rem", color: "#666" }}
            >
              Text Box
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton size="medium" sx={ribbonIconSx}>
              <Image />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.65rem", color: "#666" }}
            >
              Pictures
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton size="medium" sx={ribbonIconSx}>
              <Category />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.65rem", color: "#666" }}
            >
              Shapes
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Box sx={{ flex: 1, overflow: "hidden", display: "flex" }}>
        <Box
          sx={{
            width: 180,
            bgcolor: "#f3f2f1",
            borderRight: "1px solid #ccc",
            overflowY: "auto",
            py: 2,
            px: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {slides.map((slide) => (
            <Box key={slide} sx={{ display: "flex", gap: 1 }}>
              <Typography variant="caption" sx={{ color: "#666", width: 15 }}>
                {slide}
              </Typography>
              <Paper
                elevation={slide === 1 ? 4 : 1}
                sx={{
                  flex: 1,
                  aspectRatio: "16/9",
                  bgcolor: "white",
                  border: slide === 1 ? "2px solid #c43e1c" : "1px solid #ccc",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 0.5,
                }}
              >
                <Box
                  sx={{ width: "80%", height: 2, bgcolor: "#ddd", mb: 0.5 }}
                />
                <Box sx={{ width: "60%", height: 2, bgcolor: "#ddd" }} />
              </Paper>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: "#e3e3e3",
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: "100%",
              maxWidth: 960,
              aspectRatio: "16/9",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                border: "1px dashed #ccc",
                p: 4,
                width: "80%",
                textAlign: "center",
                mb: 4,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#333",
                  fontFamily: "Calibri Light",
                  fontWeight: 300,
                }}
              >
                Definition Rules of Derivatives
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px dashed #ccc",
                p: 2,
                width: "60%",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#666", fontFamily: "Calibri", fontWeight: 300 }}
              >
                by ThisLesson
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                right: 20,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box sx={{ width: 10, height: 10, bgcolor: "#c43e1c" }} />
              <Typography
                variant="caption"
                sx={{ color: "#c43e1c", fontWeight: "bold" }}
              >
                POINTPOWER
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box
        sx={{
          height: 24,
          bgcolor: "#c43e1c",
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 2,
        }}
      >
        <Typography variant="caption" sx={{ color: "white" }}>
          Slide 1 of 5
        </Typography>
        <Typography variant="caption" sx={{ color: "white" }}>
          English (US)
        </Typography>

        <Box sx={{ flex: 1 }} />

        <Typography variant="caption" sx={{ color: "white" }}>
          Notes
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "white", p: 0.2 }}>
            <Description fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", p: 0.2 }}>
            <ViewModule fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", p: 0.2 }}>
            <Web fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", p: 0.2 }}>
            <Slideshow fontSize="small" />
          </IconButton>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "rgba(255,255,255,0.3)", height: 12, mx: 1 }}
          />
          <Remove sx={{ color: "white", fontSize: 14 }} />
          <Slider
            size="small"
            defaultValue={68}
            sx={{
              width: 100,
              color: "white",
              "& .MuiSlider-thumb": { width: 8, height: 8 },
            }}
          />
          <Add sx={{ color: "white", fontSize: 14 }} />
          <Box
            sx={{
              border: "1px solid rgba(255,255,255,0.3)",
              px: 0.5,
              borderRadius: 0.5,
            }}
          >
            <ArrowRight sx={{ color: "white", fontSize: 14 }} />
          </Box>
          <Typography
            variant="caption"
            sx={{ color: "white", minWidth: 25, textAlign: "right" }}
          >
            68%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PointPowerApp;
