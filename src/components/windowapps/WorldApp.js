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
  ContentPaste,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatStrikethrough,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  FormatListBulleted,
  FormatListNumbered,
  KeyboardArrowDown,
  Add,
  Remove,
  ViewModule,
  Description,
  Web,
} from "@mui/icons-material";

function WorldApp() {
  const ribbonIconSx = { color: "#444" };

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
          bgcolor: "#2b579a",
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
          Document1 - World
        </Typography>
        <Box sx={{ width: 100 }} />
      </Box>

      <Box sx={{ bgcolor: "#2b579a", px: 1 }}>
        <Box sx={{ display: "flex", gap: 0 }}>
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "4px 4px 0 0",
              bgcolor: "#f3f2f1",
              color: "#2b579a",
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
            "Layout",
            "References",
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
            <ContentPaste fontSize="large" sx={{ color: "#2b579a" }} />
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
                Calibri (Body)
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
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatStrikethrough fontSize="small" />
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
              <FormatListBulleted fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatListNumbered fontSize="small" />
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
            <IconButton size="small" sx={ribbonIconSx}>
              <FormatAlignJustify fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "60%", my: "auto" }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Paper
            sx={{
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #2b579a",
              bgcolor: "white",
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              AaBbCc
            </Typography>
          </Paper>
          <Paper
            sx={{
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ccc",
              bgcolor: "white",
            }}
          >
            <Typography variant="caption" sx={{ color: "black" }}>
              AaBbCc
            </Typography>
          </Paper>
        </Box>
      </Paper>

      <Box
        sx={{
          flex: 1,
          bgcolor: "#e3e3e3",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "210mm",
            minHeight: "297mm",
            bgcolor: "white",
            p: "25mm",
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, fontFamily: "Calibri, Arial" }}
          >
            Site Ad Logic
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#2b579a", mb: 3, fontFamily: "Calibri, Arial" }}
          >
            1. Phase
          </Typography>
          <Typography
            //paragraph
            sx={{
              fontFamily: "Calibri, Arial",
              fontSize: "11pt",
              lineHeight: 1.5,
            }}
          >
            Most sites that aim to give users a product or service start with
            any or less ads. This make the site gain popularity and users trust.
            Every user thinks that this site is more convinient than other sites
            which are old enough to go through the "ad logic". This case make
            the site get higher user traffic and create core users.
          </Typography>
          <br />
          <Typography
            //paragraph
            sx={{
              fontFamily: "Calibri, Arial",
              fontSize: "11pt",
              lineHeight: 1.5,
            }}
          >
            The site does not struggling anymore. Nevertheless, a problem comes
            out: The sites growing slowed or stopped. For the solution, the
            sites decides bringing new features like user profiles, comments,
            new luxury ui etc... But all of these features means more expenses.
            Until now, the sites revenue probably had just barely matched its
            expenses, but these new changes have thrown the balance off
            entirely. Yes, changes bring more users. However, the number of
            increased users is not enough to cover the increased expenses. This
            stem from the fact that the number of user interesting what the site
            serves is limited. Just because the site spend two times more money,
            does not mean that the number of users will also increase two times.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#2b579a",
              mt: 2,
              mb: 1,
              fontFamily: "Calibri, Arial",
            }}
          >
            2. Phase
          </Typography>
          <Typography
            paragraph
            sx={{
              fontFamily: "Calibri, Arial",
              fontSize: "11pt",
              lineHeight: 1.5,
            }}
          >
            If we look at the result, we can easily predict what the sites next
            move will be. Of course, it is to add ads! Increase ads, put a time
            limit to ads, increase the length of ads, make adds unskippable,
            more pop-up ads, when user enter a site open a new tab with ads,
            when user click something open a new tab with ads and so on. For the
            final, put an anti-adblocker system to prevent users from using
            adblockers.
          </Typography>
          <br />
          <Typography
            paragraph
            sx={{
              fontFamily: "Calibri, Arial",
              fontSize: "11pt",
              lineHeight: 1.5,
            }}
          >
            This is the the harsh truth of the internet world. So in the end,
            who is the winner? Unfortunately, it is never the users. When the
            users that fed up with ads tells their problem regarding ads to the
            site, they get banned or muted immidately. This situation continues
            until a new site comes out, users go to new site and the cycle
            repeats.
          </Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          height: 28,
          bgcolor: "#2b579a",
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 2,
        }}
      >
        <Typography variant="caption" sx={{ color: "white" }}>
          Page 1 of 1
        </Typography>
        <Typography variant="caption" sx={{ color: "white" }}>
          142 words
        </Typography>
        <Typography variant="caption" sx={{ color: "white" }}>
          English (US)
        </Typography>

        <Box sx={{ flex: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
            <Description fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
            <ViewModule fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", p: 0.5 }}>
            <Web fontSize="small" />
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
          <Typography
            variant="caption"
            sx={{ color: "white", minWidth: 35, textAlign: "right" }}
          >
            100%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default WorldApp;
