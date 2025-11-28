import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Divider,
  Slider,
  InputBase,
} from "@mui/material";
import {
  Save,
  Undo,
  Redo,
  ContentPaste,
  ContentCut,
  ContentCopy,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  BorderAll,
  FormatColorFill,
  FormatColorText,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  VerticalAlignBottom,
  VerticalAlignCenter,
  VerticalAlignTop,
  MergeType,
  WrapText,
  Functions,
  Search,
  Add,
  Remove,
  ViewModule,
  Description,
  KeyboardArrowDown,
} from "@mui/icons-material";

function EggzelApp() {
  const ribbonIconSx = { color: "#444" };
  const columns = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  const rows = Array.from({ length: 30 }, (_, i) => i + 1);

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
          bgcolor: "#217346",
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
          Book1 - Eggzel
        </Typography>
        <Box sx={{ width: 100 }} />
      </Box>

      <Box sx={{ bgcolor: "#217346", px: 1 }}>
        <Box sx={{ display: "flex", gap: 0 }}>
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "4px 4px 0 0",
              bgcolor: "#f3f2f1",
              color: "#217346",
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
            "Page Layout",
            "Formulas",
            "Data",
            "Review",
            "View",
            "Help",
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
            <ContentPaste fontSize="large" sx={{ color: "#217346" }} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ fontSize: "0.65rem", color: "#666" }}
          >
            Paste
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton size="small" sx={ribbonIconSx}>
              <ContentCut fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton size="small" sx={ribbonIconSx}>
              <ContentCopy fontSize="small" />
            </IconButton>
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
                Calibri
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
                11
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
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 16, my: "auto" }}
            />
            <IconButton size="small" sx={ribbonIconSx}>
              <BorderAll fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatColorFill fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ ...ribbonIconSx, color: "#c00000" }}>
              <FormatColorText fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "60%", my: "auto" }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton size="small" sx={ribbonIconSx}>
              <VerticalAlignTop fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <VerticalAlignCenter fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ bgcolor: "#e0e0e0", borderRadius: 1, color: "black" }}
            >
              <VerticalAlignBottom fontSize="small" />
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 16, my: "auto", mx: 1 }}
            />
            <IconButton size="small" sx={ribbonIconSx}>
              <WrapText fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              sx={{ bgcolor: "#e0e0e0", borderRadius: 1, color: "black" }}
            >
              <FormatAlignLeft fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatAlignCenter fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatAlignRight fontSize="small" />
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 16, my: "auto", mx: 1 }}
            />
            <IconButton size="small" sx={ribbonIconSx}>
              <MergeType fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "60%", my: "auto" }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Paper
            sx={{
              px: 1,
              display: "flex",
              alignItems: "center",
              width: 100,
              height: 24,
              border: "1px solid #ccc",
              bgcolor: "white",
            }}
          >
            <Typography variant="caption" sx={{ color: "black" }}>
              General
            </Typography>
            <KeyboardArrowDown
              sx={{ ml: "auto", fontSize: 14, color: "#666" }}
            />
          </Paper>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography
              variant="caption"
              sx={{ color: "#444", fontWeight: "bold" }}
            >
              $
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#444", fontWeight: "bold" }}
            >
              %
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#444", fontWeight: "bold" }}
            >
              ,
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 0.5,
          bgcolor: "white",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Paper
          sx={{
            width: 80,
            height: 24,
            display: "flex",
            alignItems: "center",
            pl: 1,
            border: "1px solid #ccc",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <Typography variant="caption" sx={{ color: "#333" }}>
            A1
          </Typography>
        </Paper>
        <IconButton size="small" sx={{ mx: 0.5, color: "#666" }}>
          <Functions fontSize="small" />
        </IconButton>
        <Paper
          sx={{
            flex: 1,
            height: 24,
            display: "flex",
            alignItems: "center",
            pl: 1,
            border: "1px solid #ccc",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <InputBase fullWidth sx={{ fontSize: "0.85rem", p: 0 }} />
        </Paper>
      </Box>

      <Box
        sx={{
          flex: 1,
          bgcolor: "white",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: 24,
            bgcolor: "#f3f2f1",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Box
            sx={{
              width: 40,
              borderRight: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#e6e6e6",
            }}
          >
            <Typography variant="caption" sx={{ color: "#666" }}>
              ◢
            </Typography>
          </Box>
          {columns.map((col) => (
            <Box
              key={col}
              sx={{
                flex: 1,
                minWidth: 60,
                borderRight: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#333", fontWeight: 600 }}
              >
                {col}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ flex: 1, overflow: "auto", display: "flex" }}>
          <Box
            sx={{
              width: 40,
              bgcolor: "#f3f2f1",
              borderRight: "1px solid #ccc",
            }}
          >
            {rows.map((row) => (
              <Box
                key={row}
                sx={{
                  height: 24,
                  borderBottom: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" sx={{ color: "#333" }}>
                  {row}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1, position: "relative" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                width: "100%",
              }}
            >
              {rows.map((row) =>
                columns.map((col, colIndex) => (
                  <Box
                    key={`${row}-${col}`}
                    sx={{
                      height: 24,
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      minWidth: 60,
                      outline:
                        row === 1 && col === "A" ? "2px solid #217346" : "none",
                      zIndex: row === 1 && col === "A" ? 2 : 1,
                    }}
                  />
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: 28,
          bgcolor: "#217346",
          display: "flex",
          alignItems: "center",
          px: 1,
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Ready
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "rgba(255,255,255,0.1)",
            px: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: "white" }}>
            Sheet1
          </Typography>
          <Add sx={{ color: "white", fontSize: 14, cursor: "pointer" }} />
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
            <Description fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
            <ViewModule fontSize="small" />
          </IconButton>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "rgba(255,255,255,0.3)", height: 16, mx: 1 }}
          />
          <Remove sx={{ color: "white", fontSize: 16 }} />
          <Slider
            size="small"
            defaultValue={100}
            sx={{
              width: 100,
              color: "white",
              "& .MuiSlider-thumb": { width: 10, height: 10 },
            }}
          />
          <Add sx={{ color: "white", fontSize: 16 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default EggzelApp;
