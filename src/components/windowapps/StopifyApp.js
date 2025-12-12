import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  Slider,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import {
  Home,
  Search,
  LibraryMusic,
  AddBox,
  Favorite,
  PlayCircleFilled,
  SkipPrevious,
  SkipNext,
  PauseCircleFilled,
  Shuffle,
  Repeat,
  VolumeUp,
  Devices,
  QueueMusic,
  AccessTime,
  DownloadForOffline,
} from "@mui/icons-material";

const StopifyApp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(30);

  //masterpiece song
  const audioRef = useRef(new Audio("/sounds/sscb.mp3"));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const colors = {
    bg: "#121212",
    sidebar: "#000000",
    player: "#181818",
    text: "#ffffff",
    textSec: "#b3b3b3",
    accent: "#1db954",
    card: "#181818",
    cardHover: "#282828",
  };

  const playlists = [
    "Daily Mix 1 ",
    "Discover Weekly ",
    "Top Hits 2024 ",
    "Coding Focus ",
    "Lo-Fi Beats ",
    "Gym Hype ",
  ];

  const songs = [
    {
      id: 1,
      title: "Soviet Anthem",
      artist: "Lenin ft. Alper",
      album: "Our Songs",
      duration: "3:24",
      img: "",
      url: "/sounds/sscb.mp3",
    },
    {
      id: 2,
      title: "Shape on You",
      artist: "Ad Sheer",
      album: "Division",
      duration: "3:53",
      img: "",
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      img: "",
    },
    {
      id: 4,
      title: "Never Gonna Give Me up",
      artist: "Risk Astley",
      album: "Riskroll",
      duration: "3:34",
      img: "",
    },
    {
      id: 5,
      title: "Meat Waves",
      artist: "Sand Animals",
      album: "Dreamurando",
      duration: "3:58",
      img: "",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: colors.bg,
        color: colors.text,
        overflow: "hidden",
        fontFamily: "Circular, Helvetica, Arial, sans-serif",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <Box
          sx={{
            width: 240,
            bgcolor: colors.sidebar,
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          <Box sx={{ mb: 4, px: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="span" sx={{ fontSize: 32 }}>
                ◎
              </Box>{" "}
              Stopify
            </Typography>
          </Box>

          <List sx={{ mb: 2 }}>
            <ListItemButton
              sx={{ borderRadius: 1, mb: 0.5, color: colors.text }}
            >
              <ListItemIcon sx={{ color: colors.textSec, minWidth: 40 }}>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    Home
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: colors.textSec,
                "&:hover": { color: colors.text },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                <Search />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    Search
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: colors.textSec,
                "&:hover": { color: colors.text },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                <LibraryMusic />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    Your Library
                  </Typography>
                }
              />
            </ListItemButton>
          </List>

          <Box sx={{ mt: 2, mb: 2 }}>
            <ListItemButton
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: colors.textSec,
                "&:hover": { color: colors.text },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                <AddBox />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    Create Playlist
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: colors.textSec,
                "&:hover": { color: colors.text },
              }}
            >
              <ListItemIcon sx={{ color: "#b49bc8", minWidth: 40 }}>
                <Favorite />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    Liked Songs
                  </Typography>
                }
              />
            </ListItemButton>
          </Box>

          <Divider sx={{ bgcolor: "#282828", mb: 2 }} />

          <Box sx={{ flex: 1, overflowY: "auto", mx: -2, px: 2 }}>
            <List dense>
              {playlists.map((playlist) => (
                <ListItemButton
                  key={playlist}
                  sx={{
                    color: colors.textSec,
                    "&:hover": { color: colors.text },
                    py: 0.5,
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: "0.9rem" }}>
                        {playlist}
                      </Typography>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(180deg, #202020 0%, #121212 40%)",
            overflowY: "auto",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                sx={{ bgcolor: "rgba(0,0,0,0.5)", color: "white" }}
                size="small"
              >
                <SkipPrevious sx={{ transform: "rotate(180deg)" }} />
              </IconButton>
              <IconButton
                sx={{ bgcolor: "rgba(0,0,0,0.5)", color: "white" }}
                size="small"
              >
                <SkipNext sx={{ transform: "rotate(180deg)" }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.5)",
                  borderRadius: 50,
                  textTransform: "none",
                  fontWeight: "bold",
                  height: 32,
                }}
              >
                Explore Premium
              </Button>
              <Button
                startIcon={<DownloadForOffline />}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Install App
              </Button>
              <Avatar sx={{ width: 32, height: 32, bgcolor: "#535353" }}>
                L
              </Avatar>
            </Box>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Good afternoon
          </Typography>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            {playlists.slice(0, 6).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 80,
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: "100%",
                      bgcolor: "#333",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "5px 0 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <QueueMusic sx={{ color: colors.textSec }} />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", ml: 2, color: "white" }}
                  >
                    {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Your Top Mixes
          </Typography>
          <Box sx={{ display: "flex", gap: 3, overflowX: "auto", pb: 2 }}>
            {[1, 2, 3, 4].map((i) => (
              <Paper
                key={i}
                sx={{
                  minWidth: 180,
                  p: 2,
                  bgcolor: colors.card,
                  borderRadius: 2,
                  cursor: "pointer",
                  "&:hover": { bgcolor: colors.cardHover },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1/1",
                    bgcolor: "#333",
                    borderRadius: 1,
                    mb: 2,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <QueueMusic fontSize="large" sx={{ color: "#555" }} />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    mb: 0.5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Daily Mix {i}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: colors.textSec,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  The Weekmid, El-Aminem, Ad Sheer and more
                </Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, px: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: colors.textSec, width: 40 }}
              >
                #
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: colors.textSec, flex: 1 }}
              >
                Title
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.textSec,
                  flex: 1,
                  display: { xs: "none", md: "block" },
                }}
              >
                Album
              </Typography>
              <AccessTime sx={{ color: colors.textSec, fontSize: 16 }} />
            </Box>
            <Divider sx={{ bgcolor: "#282828", mb: 2 }} />
            {songs.map((song, index) => (
              <Box
                key={song.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  borderRadius: 1,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: colors.textSec, width: 40, textAlign: "center" }}
                >
                  {index + 1}
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "#333",
                      borderRadius: 0.5,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {song.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: colors.textSec }}
                    >
                      {song.artist}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.textSec,
                    flex: 1,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {song.album}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: colors.textSec, width: 50, textAlign: "right" }}
                >
                  {song.duration}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: 90,
          bgcolor: colors.player,
          borderTop: "1px solid #282828",
          display: "flex",
          alignItems: "center",
          px: 2,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "30%",
            minWidth: 180,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              bgcolor: "#333",
              borderRadius: 1,
              mr: 2,
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Soviet Anthem
            </Typography>
            <Typography variant="caption" sx={{ color: colors.textSec }}>
              Lenin ft. Alper
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: colors.accent }}>
            <Favorite />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <IconButton
              size="small"
              sx={{ color: colors.textSec, "&:hover": { color: "white" } }}
            >
              <Shuffle fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: colors.textSec, "&:hover": { color: "white" } }}
            >
              <SkipPrevious />
            </IconButton>
            <IconButton
              onClick={togglePlay}
              sx={{
                color: "white",
                bgcolor: "white",
                p: 0.5,
                "&:hover": { transform: "scale(1.05)", bgcolor: "white" },
              }}
            >
              {isPlaying ? (
                <PauseCircleFilled sx={{ fontSize: 32, color: "black" }} />
              ) : (
                <PlayCircleFilled sx={{ fontSize: 32, color: "black" }} />
              )}
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: colors.textSec, "&:hover": { color: "white" } }}
            >
              <SkipNext />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: colors.textSec, "&:hover": { color: "white" } }}
            >
              <Repeat fontSize="small" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <Typography variant="caption" sx={{ color: colors.textSec }}>
              1:20
            </Typography>
            <Slider
              size="small"
              value={progress}
              onChange={(e, v) => setProgress(v)}
              sx={{
                color: "white",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 0,
                  height: 0,
                  transition: "0.2s",
                },
                "&:hover .MuiSlider-thumb": { width: 12, height: 12 },
                "& .MuiSlider-rail": { color: "#535353", opacity: 1 },
              }}
            />
            <Typography variant="caption" sx={{ color: colors.textSec }}>
              3:20
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "30%",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <IconButton size="small" sx={{ color: colors.textSec }}>
            <QueueMusic fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: colors.textSec }}>
            <Devices fontSize="small" />
          </IconButton>
          <Box
            sx={{ display: "flex", alignItems: "center", width: 100, gap: 1 }}
          >
            <VolumeUp sx={{ color: colors.textSec, fontSize: 20 }} />
            <Slider
              size="small"
              value={volume}
              onChange={(e, v) => setVolume(v)}
              sx={{
                color: "white",
                height: 4,
                "& .MuiSlider-rail": { color: "#535353", opacity: 1 },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StopifyApp;
