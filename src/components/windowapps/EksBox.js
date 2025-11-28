import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  Avatar,
} from "@mui/material";
import {
  Home,
  Apps,
  People,
  Search,
  Notifications,
  Settings,
  SportsEsports,
  Storefront,
  LibraryBooks,
  Gamepad,
  ArrowBack,
} from "@mui/icons-material";

const EksBoxApp = () => {
  const colors = {
    bg: "#121212",
    sidebar: "#1f1f1f",
    card: "#2b2b2b",
    accent: "#107c10",
    text: "#ffffff",
    textSec: "#a0a0a0",
  };

  const games = [
    { title: "Battlingfield 2042", img: "/images/bf2042.png", hero: true },
    { title: "Uppertale", img: "/images/uppertale.png" },
    { title: "Counter Stroke", img: "/images/CSGO.png" },
    { title: "Brawl Clash", img: "/images/brawlclash.png" },
    { title: "Gaylorant", img: "/images/gaylorant.png" },
    { title: "LuL", img: "/images/lul.png" },
    { title: "POBG", img: "/images/POBG.png" },
    { title: "Stanlee Parable", img: "/images/stanleeparable.png" },
    { title: "Stardew Mountains", img: "/images/stardew.png" },
  ];

  const heroGame = games.find((g) => g.hero);
  const libraryGames = games.filter((g) => !g.hero);

  const sidebarItems = [
    { icon: <Home />, label: "Home" },
    { icon: <Storefront />, label: "Store" },
    { icon: <LibraryBooks />, label: "My Library" },
    { icon: <People />, label: "Community" },
    { icon: <SportsEsports />, label: "Game Pass" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        bgcolor: colors.bg,
        color: colors.text,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 60,
          bgcolor: colors.sidebar,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          gap: 2,
          zIndex: 10,
        }}
      >
        <IconButton sx={{ color: colors.accent, p: 1 }}>
          <Gamepad fontSize="large" />
        </IconButton>
        {sidebarItems.map((item) => (
          <IconButton
            key={item.label}
            sx={{
              color: item.label === "Home" ? colors.text : colors.textSec,
              "&:hover": {
                color: colors.text,
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />
        <IconButton sx={{ color: colors.textSec }}>
          <Settings />
        </IconButton>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: colors.card,
            fontSize: "0.8rem",
            border: `2px solid ${colors.accent}`,
          }}
        >
          L
        </Avatar>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: 48,
            display: "flex",
            alignItems: "center",
            px: 4,
            gap: 2,
          }}
        >
          <IconButton size="small" sx={{ color: colors.textSec }}>
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            HOME
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box
            sx={{
              bgcolor: colors.card,
              display: "flex",
              alignItems: "center",
              borderRadius: 4,
              px: 2,
              py: 0.5,
              width: 200,
            }}
          >
            <Search sx={{ fontSize: 20, color: colors.textSec, mr: 1 }} />
            <Typography variant="body2" sx={{ color: colors.textSec }}>
              Search
            </Typography>
          </Box>
          <IconButton sx={{ color: colors.textSec }}>
            <Notifications />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
          <Paper
            sx={{
              width: "100%",
              height: 220,
              borderRadius: 2,
              bgcolor: colors.card,
              overflow: "hidden",
              position: "relative",
              mb: 4,
              backgroundImage: `linear-gradient(to right, #000 0%, transparent 60%), url(${heroGame.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          >
            <Box
              sx={{ position: "absolute", bottom: 30, left: 40, maxWidth: 400 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: colors.accent,
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                FEATURED
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  mb: 2,
                }}
              >
                {heroGame.title}
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: colors.accent,
                    color: "white",
                    fontWeight: "bold",
                    px: 3,
                    "&:hover": { bgcolor: "#0e6b0e" },
                  }}
                >
                  PLAY
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.5)",
                    fontWeight: "bold",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  DETAILS
                </Button>
              </Box>
            </Box>
          </Paper>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Jump back in
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: 2,
            }}
          >
            {libraryGames.map((game) => (
              <Paper
                key={game.title}
                elevation={4}
                sx={{
                  aspectRatio: "3/4",
                  bgcolor: colors.card,
                  borderRadius: 1,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    outline: `2px solid ${colors.accent}`,
                  },
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={game.img}
                  alt={game.title}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: "rgba(0,0,0,0.8)",
                    p: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "bold",
                      display: "block",
                      textAlign: "center",
                      fontSize: "0.7rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {game.title}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EksBoxApp;
