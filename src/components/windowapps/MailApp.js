import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  IconButton,
  Avatar,
  Divider,
  InputBase,
  Button,
} from "@mui/material";
import {
  Menu,
  Search,
  Add,
  Inbox,
  Send,
  Drafts,
  Delete,
  Star,
  Archive,
  Reply,
  ReplyAll,
  Forward,
  MoreVert,
  Flag,
} from "@mui/icons-material";

const MailApp = () => {
  const [selectedMailId, setSelectedMailId] = useState(1);

  const colors = {
    primary: "#0078d4",
    bg: "#f0f2f5",
    sidebar: "#f3f2f1",
    listBg: "#ffffff",
    readBg: "#ffffff",
    selectedBg: "#e1dfdd",
    text: "#201f1e",
    textSec: "#605e5c",
    divider: "#edebe9",
  };

  const mails = [
    {
      id: 1,
      sender: "Abu Ammar",
      avatar: "A",
      subject: "Project Update: Deadline",
      time: "10:30 AM",
      preview:
        "Hi team, just wanted to warn you all about the deadline on the 2th december. We did not start yet...",
      body: `Hi team,

Just wanted to warn you all about the deadline on the 2th december. We did not start yet and the time is getting closer. 

Please attend the meeting on this tuesday.

Best,
Ammar`,
    },
    {
      id: 2,
      sender: "Bilingual Language Schools",
      avatar: "B",
      subject: "Important Notice",
      time: "Yesterday",
      preview:
        "Hello. We have been trying to reach you concerning your recent subscription...",
      body: `Hello,

We have been trying to reach you concerning your recent subscription request. Our system shows incomplete billing information and immediate action may be required.

Please review this as soon as possible.

BECAUSE YOUR SUBSCRIPTION IS ABOUT TO START!!!

🎺 DUUU DU DU DUNNN! DUUU DU DU DUNNN!

AND NEW CHAMPION OF THE WOOOORLD…
JOOOOOHN CEEEEEENAAAAA!!!

🔥 THIS SUNDAY NIGHT! 🔥
LIVE! IN FRONT OF MILLIONS!!!
GET YOUR TICKETS NOW…
if you dare.

This email was automatically generated. Do not reply unless you want JOHN CENA TO BODYSLAM YOUR INBOX.

Sincerely,
Totally-Real-Not-Fake WWE Support Team`,
    },
    {
      id: 3,
      sender: "Support Team",
      avatar: "S",
      subject: "Ticket #49201 Resolved",
      time: "Tue",
      preview:
        "Your support ticket regarding the login issue has been resolved. The problem occurred...",
      body: `Hello User,

Your support ticket regarding the login issue has been resolved. The problem occurred because of your brainless activity. Please do not use internet again.

Thank you for your understanding.

Regards,
Support Team`,
    },
    {
      id: 4,
      sender: "WhiteBank",
      avatar: "W",
      subject: "Card Statement Created",
      time: "Mon",
      preview:
        "Discover the top 5 marketing trends that will define the landscape in 2024. Don't miss out...",
      body: `Hello Joe Mama,

Your monthly card statement for the billing period 31/02/2025 - 31/03/2025 has been successfully generated and is now available for viewing.

You can access your statement through the Online Banking Portal or Mobile App:

Access statement:

Log in to your account

Navigate to Cards > Statements

Select the latest period

Please review your transactions carefully. If you notice any unfamiliar activity, do not contact our support team. Never.

After everything go bankrupt.


Damn you for choosing WhiteBank.

If you need assistance, we are NOT available 24/7.
Resolve your problems yourself, please.

Kind regards,
WhiteBank Customer Support Team`,
    },
    {
      id: 5,
      sender: "Googel Adsense",
      avatar: "G",
      subject: "Unfimiliar Activity",
      time: "Last Week",
      preview:
        "Hi, Our systems have detected unfamiliar activity on your sites Ads. Please review the recent actions...",
      body: `Hi,

Our systems have detected unfamiliar activity on your sites Ads. Please review the recent actions taken by users. 
In case this activity continues, we may have to disable our partnership.

Possible reasons for this activity include:
- Sudden increase in traffic from users
- Unusual click patterns on ads
- Changes in Ad content that violate our policies
- extreme amount of ads are shown on a single page

Regards,
Googel Adsense Team`,
    },
  ];

  const selectedMail = mails.find((m) => m.id === selectedMailId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: colors.bg,
        color: colors.text,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: 48,
          bgcolor: colors.primary,
          display: "flex",
          alignItems: "center",
          px: 2,
          gap: 2,
        }}
      >
        <IconButton size="small" sx={{ color: "white" }}>
          <Menu />
        </IconButton>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", fontWeight: 600 }}
        >
          Outlook Mail
        </Typography>

        <Paper
          component="form"
          sx={{
            ml: 4,
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 300,
            height: 32,
            borderRadius: 1,
            bgcolor: "rgba(255,255,255,0.2)",
            border: "none",
            boxShadow: "none",
            "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
          }}
        >
          <Search sx={{ color: "white", mr: 1, fontSize: 20 }} />
        </Paper>

        <Box sx={{ flex: 1 }} />
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "rgba(255,255,255,0.2)",
            fontSize: "0.9rem",
          }}
        >
          L
        </Avatar>
      </Box>

      <Box
        sx={{
          height: 44,
          bgcolor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          px: 1,
          borderBottom: `1px solid ${colors.divider}`,
        }}
      >
        <Button
          startIcon={<Add />}
          sx={{
            textTransform: "none",
            color: colors.primary,
            fontWeight: 600,
            mr: 2,
          }}
        >
          New message
        </Button>
        <Divider orientation="vertical" sx={{ height: 20, mx: 1 }} />
        <IconButton size="small" sx={{ color: colors.textSec }}>
          <Delete fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.textSec }}>
          <Archive fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.textSec }}>
          <Flag fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" sx={{ height: 20, mx: 1 }} />
        <Button sx={{ textTransform: "none", color: colors.textSec }}>
          Reply
        </Button>
        <Button sx={{ textTransform: "none", color: colors.textSec }}>
          Forward
        </Button>
      </Box>

      <Box sx={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <Box
          sx={{
            width: 220,
            bgcolor: colors.sidebar,
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            pt: 1,
          }}
        >
          <List component="nav" dense>
            {[
              { text: "Inbox", icon: <Inbox />, count: 5 },
              { text: "Sent Items", icon: <Send /> },
              { text: "Drafts", icon: <Drafts /> },
              { text: "Favorites", icon: <Star /> },
              { text: "Deleted", icon: <Delete /> },
              { text: "Archive", icon: <Archive /> },
            ].map((item, index) => (
              <ListItemButton
                key={item.text}
                selected={index === 0}
                sx={{
                  borderLeft:
                    index === 0
                      ? `3px solid ${colors.primary}`
                      : "3px solid transparent",
                  bgcolor: index === 0 ? "#edebe9" : "transparent",
                  "&:hover": { bgcolor: "#edebe9" },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: index === 0 ? colors.primary : colors.textSec,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: index === 0 ? 600 : 400,
                  }}
                />
                {item.count && (
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: "bold", color: colors.primary }}
                  >
                    {item.count}
                  </Typography>
                )}
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            width: 320,
            bgcolor: colors.listBg,
            borderRight: `1px solid ${colors.divider}`,
            overflowY: "auto",
          }}
        >
          <Box sx={{ p: 1.5, borderBottom: `1px solid ${colors.divider}` }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1rem" }}>
              Inbox
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: colors.primary,
                  borderBottom: `2px solid ${colors.primary}`,
                  cursor: "pointer",
                }}
              >
                Focused
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: colors.textSec, cursor: "pointer" }}
              >
                Other
              </Typography>
            </Box>
          </Box>
          <List disablePadding>
            {mails.map((mail) => (
              <ListItemButton
                key={mail.id}
                selected={selectedMailId === mail.id}
                onClick={() => setSelectedMailId(mail.id)}
                sx={{
                  alignItems: "flex-start",
                  py: 1.5,
                  borderBottom: `1px solid ${colors.divider}`,
                  bgcolor:
                    selectedMailId === mail.id
                      ? colors.selectedBg
                      : "transparent",
                  "&.Mui-selected": { bgcolor: colors.selectedBg },
                  "&.Mui-selected:hover": { bgcolor: colors.selectedBg },
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    mr: 1.5,
                    bgcolor: colors.primary,
                    fontSize: "0.9rem",
                  }}
                >
                  {mail.avatar}
                </Avatar>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: colors.text }}
                      noWrap
                    >
                      {mail.sender}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.textSec,
                        ml: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {mail.time}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.primary, fontWeight: 500 }}
                    noWrap
                  >
                    {mail.subject}
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
                    {mail.preview}
                  </Typography>
                </Box>
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: colors.readBg,
            p: 3,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {selectedMail ? (
            <>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                {selectedMail.subject}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                  sx={{ width: 40, height: 40, mr: 2, bgcolor: colors.primary }}
                >
                  {selectedMail.avatar}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {selectedMail.sender}
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.textSec }}>
                    To: Me
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton size="small">
                    <Reply />
                  </IconButton>
                  <IconButton size="small">
                    <ReplyAll />
                  </IconButton>
                  <IconButton size="small">
                    <Forward />
                  </IconButton>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>
              </Box>
              <Divider sx={{ mb: 3 }} />
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}
              >
                {selectedMail.body}
              </Typography>
            </>
          ) : (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.textSec,
              }}
            >
              <Typography>Select an item to read</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MailApp;
