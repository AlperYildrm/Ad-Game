import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  FileCopy,
  Search,
  Source,
  BugReport,
  Extension,
  AccountCircle,
  Settings,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Close,
  Circle,
} from "@mui/icons-material";

const VsCodApp = () => {
  const colors = {
    activityBar: "#333333",
    sideBar: "#252526",
    editor: "#1e1e1e",
    statusBar: "#007acc",
    tabActive: "#1e1e1e",
    tabInactive: "#2d2d2d",
    text: "#cccccc",
    textDim: "#969696",
    accent: "#007acc",
  };

  const codeContent = `import React from "react";
import { Box, Typography, IconButton } from "@mui/material";

const VsCodApp = () => {
  return (
    <Box sx={{ display: "flex", height: "100%", bgcolor: "#1e1e1e" }}>
      {/* Activity Bar */}
      <Box sx={{ width: 48, bgcolor: "#333" }}>...</Box>
      
      {/* Sidebar */}
      <Box sx={{ width: 200, bgcolor: "#252526" }}>
        <Typography>EXPLORER</Typography>
      </Box>

      {/* Editor */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ height: 35, display: "flex" }}>
          <Typography>VsCodApp.js</Typography>
        </Box>
        <Box sx={{ flex: 1, p: 2, fontFamily: "Consolas" }}>
           {/* Code goes here */}
        </Box>
      </Box>
    </Box>
  );
};

export default VsCodApp;`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: colors.editor,
        color: colors.text,
        overflow: "hidden",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <Box
          sx={{
            width: 48,
            bgcolor: colors.activityBar,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 1,
          }}
        >
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <FileCopy sx={{ fontSize: 24, color: "white" }} />
          </IconButton>
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <Search sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <Source sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <BugReport sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <Extension sx={{ fontSize: 24 }} />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <AccountCircle sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            sx={{ color: colors.textDim, "&:hover": { color: colors.text } }}
          >
            <Settings sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: 220,
            bgcolor: colors.sideBar,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontSize: "0.7rem", color: colors.textDim }}
            >
              EXPLORER
            </Typography>
            <IconButton size="small" sx={{ color: colors.textDim, p: 0 }}>
              <KeyboardArrowDown sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
          <Box sx={{ px: 0.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                py: 0.5,
              }}
            >
              <KeyboardArrowDown
                sx={{ fontSize: 16, mr: 0.5, color: colors.textDim }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  color: colors.text,
                }}
              >
                VSCODE-PROJECT
              </Typography>
            </Box>
            <Box sx={{ pl: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  py: 0.5,
                }}
              >
                <KeyboardArrowDown
                  sx={{ fontSize: 16, mr: 0.5, color: colors.textDim }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.8rem", color: colors.text }}
                >
                  src
                </Typography>
              </Box>
              <Box sx={{ pl: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    py: 0.5,
                  }}
                >
                  <KeyboardArrowRight
                    sx={{ fontSize: 16, mr: 0.5, color: colors.textDim }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.8rem", color: colors.text }}
                  >
                    components
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    py: 0.5,
                    bgcolor: "#37373d",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: colors.textDim,
                      width: 16,
                      textAlign: "center",
                      mr: 0.5,
                    }}
                  >
                    J
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.8rem", color: colors.text }}
                  >
                    VsCodApp.js
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            bgcolor: colors.editor,
          }}
        >
          <Box
            sx={{
              height: 35,
              bgcolor: colors.tabInactive,
              display: "flex",
              overflowX: "auto",
            }}
          >
            <Box
              sx={{
                minWidth: 140,
                bgcolor: colors.tabActive,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1.5,
                borderTop: `2px solid ${colors.accent}`,
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  sx={{
                    color: "#61dafb",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  JS
                </Typography>
                <Typography variant="caption" sx={{ color: colors.text }}>
                  VsCodApp.js
                </Typography>
              </Box>
              <Close sx={{ fontSize: 14, color: colors.textDim, ml: 1 }} />
            </Box>
            <Box
              sx={{
                minWidth: 140,
                display: "flex",
                alignItems: "center",
                px: 1.5,
                borderRight: "1px solid #252526",
                opacity: 0.7,
              }}
            >
              <Typography sx={{ color: "#e8e8e8", fontSize: "0.8rem", mr: 1 }}>
                #
              </Typography>
              <Typography variant="caption" sx={{ color: colors.textDim }}>
                style.css
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              height: 24,
              display: "flex",
              alignItems: "center",
              px: 2,
              gap: 1,
            }}
          >
            <Typography variant="caption" sx={{ color: colors.textDim }}>
              src
            </Typography>
            <KeyboardArrowRight sx={{ fontSize: 12, color: colors.textDim }} />
            <Typography variant="caption" sx={{ color: colors.textDim }}>
              components
            </Typography>
            <KeyboardArrowRight sx={{ fontSize: 12, color: colors.textDim }} />
            <Typography variant="caption" sx={{ color: colors.text }}>
              VsCodApp.js
            </Typography>
          </Box>

          <Box
            sx={{ flex: 1, overflow: "auto", position: "relative", px: 0.5 }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: 40,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  pr: 2,
                  color: "#858585",
                  fontFamily: "Consolas, monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  userSelect: "none",
                }}
              >
                {Array.from({ length: 28 }, (_, i) => i + 1).map((num) => (
                  <Box key={num}>{num}</Box>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  fontFamily: "Consolas, monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "#d4d4d4",
                  whiteSpace: "pre",
                }}
              >
                {codeContent}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: 22,
          bgcolor: colors.statusBar,
          display: "flex",
          alignItems: "center",
          px: 1,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Source sx={{ fontSize: 12, color: "white" }} />
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "0.7rem" }}
            >
              main*
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Circle sx={{ fontSize: 12, color: "white", opacity: 0.5 }} />
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "0.7rem" }}
            >
              0
            </Typography>
            <BugReport sx={{ fontSize: 12, color: "white", opacity: 0.5 }} />
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "0.7rem" }}
            >
              0
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            variant="caption"
            sx={{ color: "white", fontSize: "0.7rem" }}
          >
            Ln 28, Col 12
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "white", fontSize: "0.7rem" }}
          >
            UTF-8
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "white", fontSize: "0.7rem" }}
          >
            JavaScript React
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "white", fontSize: "0.7rem" }}
          >
            Prettier
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VsCodApp;
