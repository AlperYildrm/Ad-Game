import React, { useState, cloneElement } from "react";
import {
  Box,
  Paper,
  Typography,
  InputBase,
  Avatar,
  IconButton,
  Button,
  Divider,
  ThemeProvider,
  createTheme,
  Fade,
  Modal,
  Slide,
} from "@mui/material";

import BrowserApp from "../components/windowapps/BrowserApp";
import WorldApp from "../components/windowapps/WorldApp";
import CalculatorApp from "../components/windowapps/CalculatorApp";
import SettingsApp from "../components/windowapps/SettingsApp";
import CmdApp from "../components/windowapps/CmdApp";
import EggzelApp from "../components/windowapps/EggzelApp";
import EksBoxApp from "./windowapps/EksBox";
import MailApp from "../components/windowapps/MailApp";
import PhotosApp from "../components/windowapps/PhotosApp";
import PointPowerApp from "../components/windowapps/PointPowerApp";
import StopifyApp from "../components/windowapps/StopifyApp";
import VsCodApp from "../components/windowapps/VsCodApp";

import {
  Search as SearchIcon,
  PowerSettingsNew as PowerIcon,
  Description as WordIcon,
  TableChart as ExcelIcon,
  Slideshow as PowerPointIcon,
  Email as MailIcon,
  Language as EdgeIcon,
  Image as PhotoIcon,
  Settings as SettingsIcon,
  Calculate as CalculatorIcon,
  MusicNote as SpotifyIcon,
  VideogameAsset as XboxIcon,
  Code as VSCodeIcon,
  Terminal as TerminalIcon,
  ArrowForwardIos as ArrowIcon,
  Close as CloseIcon,
  CropSquare as MaximizeIcon,
  Minimize as MinimizeIcon,
} from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f0f0f",
      paper: "rgba(32, 32, 32, 0.95)",
    },
    primary: {
      main: "#60cdff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a0a0a0",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

const pinnedApps = [
  {
    id: 1,
    name: "Edge",
    icon: <EdgeIcon sx={{ color: "#0078d7" }} />,
    action: "Opening Browser...",
  },
  {
    id: 2,
    name: "World",
    icon: <WordIcon sx={{ color: "#2b579a" }} />,
    action: "Opening Document...",
  },
  {
    id: 3,
    name: "Eggzel",
    icon: <ExcelIcon sx={{ color: "#217346" }} />,
    action: "Opening Spreadsheet...",
  },
  {
    id: 4,
    name: "PointPower",
    icon: <PowerPointIcon sx={{ color: "#d24726" }} />,
    action: "Opening Presentation...",
  },
  {
    id: 5,
    name: "Mail",
    icon: <MailIcon sx={{ color: "#0078d7" }} />,
    action: "Checking Mailbox...",
  },
  {
    id: 6,
    name: "Photos",
    icon: <PhotoIcon sx={{ color: "#fff" }} />,
    action: "Opening Gallery...",
  },
  {
    id: 7,
    name: "Settings",
    icon: <SettingsIcon sx={{ color: "#888" }} />,
    action: "Opening System Settings...",
  },
  {
    id: 8,
    name: "Calculator",
    icon: <CalculatorIcon sx={{ color: "#fff" }} />,
    action: "Opening Calculator...",
  },
  {
    id: 9,
    name: "Stopify",
    icon: <SpotifyIcon sx={{ color: "#1db954" }} />,
    action: "Playing Music...",
  },
  {
    id: 10,
    name: "EksBox",
    icon: <XboxIcon sx={{ color: "#107c10" }} />,
    action: "Launching Launcher...",
  },
  {
    id: 11,
    name: "Vs Cod",
    icon: <VSCodeIcon sx={{ color: "#007acc" }} />,
    action: "Opening Editor...",
  },
  {
    id: 12,
    name: "Cmd",
    icon: <TerminalIcon sx={{ color: "#fff" }} />,
    action: "Starting Bash...",
  },
];

function WindowModel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeApp, setActiveApp] = useState(null);

  const handleAppClick = (app) => {
    setActiveApp(app);
  };

  const handleCloseApp = () => {
    setActiveApp(null);
  };

  const renderAppContent = () => {
    if (!activeApp) return null;
    switch (activeApp.name) {
      case "Edge":
        return <BrowserApp />;
      case "World":
        return <WorldApp />;
      case "Calculator":
        return <CalculatorApp />;
      case "Settings":
        return <SettingsApp />;
      case "Cmd":
        return <CmdApp />;
      case "Eggzel":
        return <EggzelApp />;
      case "EksBox":
        return <EksBoxApp />;
      case "Mail":
        return <MailApp />;
      case "Photos":
        return <PhotosApp />;
      case "PointPower":
        return <PointPowerApp />;
      case "Stopify":
        return <StopifyApp />;
      case "Vs Cod":
        return <VsCodApp />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={150}>
        <Paper
          elevation={24}
          sx={{
            width: { xs: "100%", sm: 640 },
            height: { xs: "600px", sm: 700 },
            borderRadius: "12px",
            backgroundColor: "rgba(32, 32, 32, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            mx: "auto",
            my: 2,
            position: "relative",
            color: "text.primary",
          }}
        >
          <Box sx={{ p: 4, pb: 2 }}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "24px",
                backgroundColor: "#1f1f1f",
                border: "1px solid #333",
                boxShadow: "none",
                mb: 2,
              }}
            >
              <IconButton sx={{ p: "10px", color: "#fff" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#fff" }}
                placeholder="Type here to search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Paper>
          </Box>

          <Box sx={{ px: 4, flexGrow: 1, overflowY: "auto", pb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="subtitle2" fontWeight="bold">
                Pinned
              </Typography>
              <Button
                size="small"
                endIcon={<ArrowIcon sx={{ fontSize: 10 }} />}
                sx={{ color: "text.primary", fontSize: "0.75rem", py: 0 }}
              >
                All apps
              </Button>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(3, 1fr)",
                  sm: "repeat(6, 1fr)",
                },
                gap: 2,
                mb: 4,
              }}
            >
              {pinnedApps
                .filter((app) =>
                  app.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((app) => (
                  <Button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 1,
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                        "& svg": { fontSize: 32 },
                      }}
                    >
                      {app.icon}
                    </Box>
                    <Typography
                      variant="caption"
                      noWrap
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {app.name}
                    </Typography>
                  </Button>
                ))}
            </Box>
          </Box>

          <Box sx={{ mt: "auto" }}>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
            <Box
              sx={{
                p: 2,
                px: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            >
              <Button
                startIcon={
                  <Avatar
                    sx={{ width: 32, height: 32, bgcolor: "primary.main" }}
                  >
                    L
                  </Avatar>
                }
                sx={{
                  color: "text.primary",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Lunix
              </Button>
              <IconButton size="small" sx={{ color: "text.primary" }}>
                <PowerIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Slide>

      <Modal
        open={!!activeApp}
        onClose={handleCloseApp}
        closeAfterTransition
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Fade in={!!activeApp}>
          <Paper
            elevation={24}
            sx={{
              width: { xs: "95%", md: "80%" },
              height: { xs: "90%", md: "80%" },
              maxWidth: 1200,
              bgcolor: "#202020",
              border: "1px solid #444",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              outline: "none",
            }}
          >
            <Box
              sx={{
                height: 40,
                bgcolor: activeApp?.name === "World" ? "#2b579a" : "#2b2b2b",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {activeApp &&
                  cloneElement(activeApp.icon, {
                    sx: { fontSize: 20, color: "white" },
                  })}
                <Typography variant="caption" sx={{ color: "white" }}>
                  {activeApp?.name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <IconButton
                  size="small"
                  sx={{ color: "white", borderRadius: 0 }}
                >
                  <MinimizeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: "white", borderRadius: 0 }}
                >
                  <MaximizeIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleCloseApp}
                  sx={{
                    color: "white",
                    borderRadius: 0,
                    "&:hover": { bgcolor: "#e81123" },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ flex: 1, overflow: "hidden", bgcolor: "#202020" }}>
              {renderAppContent()}
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}

export default WindowModel;
