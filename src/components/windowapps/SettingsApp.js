import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  InputBase,
  Paper,
  Button,
} from "@mui/material";
import {
  Search,
  Monitor,
  Bluetooth,
  Wifi,
  Palette,
  Apps,
  ManageAccounts,
  Language,
  SportsEsports,
  AccessibilityNew,
  Security,
  Update,
  ChevronRight,
  Computer,
  VolumeUp,
  NotificationsNone,
  BatteryStd,
  Storage,
  Brightness4,
  ArrowBack,
} from "@mui/icons-material";

function SettingsApp() {
  const [activeTab, setActiveTab] = useState("System");

  const colors = {
    bg: "#202020",
    sidebar: "#1f1f1f",
    card: "#2b2b2b",
    cardHover: "#333333",
    accent: "#60cdff",
    text: "#ffffff",
    textSec: "#a0a0a0",
  };

  const menuItems = [
    { text: "System", icon: <Monitor /> },
    { text: "Bluetooth & devices", icon: <Bluetooth /> },
    { text: "Network & internet", icon: <Wifi /> },
    { text: "Personalization", icon: <Palette /> },
    { text: "Apps", icon: <Apps /> },
    { text: "Accounts", icon: <ManageAccounts /> },
    { text: "Time & language", icon: <Language /> },
    { text: "Gaming", icon: <SportsEsports /> },
    { text: "Accessibility", icon: <AccessibilityNew /> },
    { text: "Privacy & security", icon: <Security /> },
    { text: "Windows Update", icon: <Update /> },
  ];

  const SettingCard = ({ icon, title, subtitle, action }) => (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        mb: 0.5,
        bgcolor: colors.card,
        borderRadius: 1,
        border: "1px solid rgba(255,255,255,0.05)",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": { bgcolor: colors.cardHover },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {icon && (
        <Box
          sx={{
            mr: 2,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
          }}
        >
          {React.cloneElement(icon, { sx: { fontSize: 24 } })}
        </Box>
      )}

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" sx={{ color: "white", fontWeight: 400 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: colors.textSec }}>
          {subtitle}
        </Typography>
      </Box>

      <Box sx={{ ml: 2 }}>
        {action ? action : <ChevronRight sx={{ color: colors.textSec }} />}
      </Box>
    </Paper>
  );

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
          width: 280,
          bgcolor: colors.sidebar,
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, px: 1 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: colors.accent,
              mr: 2,
              fontSize: "1.5rem",
            }}
          >
            L
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Lunix
            </Typography>
            <Typography variant="caption" sx={{ color: colors.textSec }}>
              Local Account
            </Typography>
          </Box>
        </Box>

        <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: 1,
            bgcolor: colors.card,
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "none",
            mb: 2,
            "&:focus-within": { borderBottom: `2px solid ${colors.accent}` },
          }}
        >
          <Search sx={{ color: colors.textSec, mr: 1, fontSize: 20 }} />
          <InputBase
            sx={{ ml: 0.5, flex: 1, color: "white", fontSize: "0.9rem" }}
            placeholder="Find a setting"
          />
        </Paper>

        <Box sx={{ flex: 1, overflowY: "auto", mx: -1, px: 1 }}>
          <List dense>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                selected={activeTab === item.text}
                onClick={() => setActiveTab(item.text)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    bgcolor: "rgba(255,255,255,0.08)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "50%",
                      width: 3,
                      bgcolor: colors.accent,
                      borderRadius: 4,
                    },
                  },
                  "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color:
                      activeTab === item.text ? colors.accent : colors.textSec,
                  }}
                >
                  {React.cloneElement(item.icon, { fontSize: "small" })}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: activeTab === item.text ? 600 : 400,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          {activeTab}
        </Typography>

        {activeTab === "System" ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Computer sx={{ fontSize: 64, color: colors.textSec, mr: 3 }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Desktop-ArchLunix
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 0.5 }}>
                  <Button
                    size="small"
                    sx={{ color: colors.accent, textTransform: "none", p: 0 }}
                  >
                    Rename
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <SettingCard
                icon={<Monitor />}
                title="Display"
                subtitle="Monitors, brightness, night light, display profile"
              />
              <SettingCard
                icon={<VolumeUp />}
                title="Sound"
                subtitle="Volume levels, output, input, sound devices"
              />
              <SettingCard
                icon={<NotificationsNone />}
                title="Notifications"
                subtitle="Alerts from apps and system, do not disturb"
              />
              <SettingCard
                icon={<Brightness4 />}
                title="Focus"
                subtitle="Reduce distractions, focus sessions"
              />
              <SettingCard
                icon={<BatteryStd />}
                title="Power & battery"
                subtitle="Sleep, battery usage, battery saver"
              />
              <SettingCard
                icon={<Storage />}
                title="Storage"
                subtitle="Storage space, drives, configuration rules"
              />
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "50%",
              opacity: 0.5,
            }}
          >
            {menuItems.find((i) => i.text === activeTab)?.icon}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {activeTab} Settings
            </Typography>
            <Typography variant="body2">
              Activate Window to view this section.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SettingsApp;
