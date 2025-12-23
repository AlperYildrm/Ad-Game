import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  IconButton,
  Slider,
  Switch,
  Stack,
  Modal,
  Button,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import {
  Search,
  Monitor,
  ChevronRight,
  Computer,
  VolumeUp,
  NotificationsNone,
  RestartAlt,
  ArrowBack,
  Nightlight,
  Brightness6,
  VolumeDown,
  DoNotDisturb,
  History,
} from "@mui/icons-material";

function DownloadSettingsModal4({ handleResetting }) {
  const [activeTab, setActiveTab] = useState("Ad System");
  const [activeSection, setActiveSection] = useState(null);
  const [disturb, setDisturb] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalModal, setOpenModalModal] = useState(false);
  const [openModalModalModal, setOpenModalModalModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleCloseModalModal = () => setOpenModalModal(false);
  const handleCloseModalModalModal = () => setOpenModalModalModal(false);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const router = useRouter();

  const handleRouting = () => {
    router.push("/The-End");
  };

  //This is working diffirent (in a buggy way) but serving the same idea so i left it like this
  const handleDisturbing = () => {
    setDisturb(!disturb);
    if (disturb) return;
    for (let i = 0; i < 3; i++) {
      alert("Ok I will stop disturbing you");
    }
  };

  const colors = {
    bg: "#202020",
    sidebar: "#1f1f1f",
    card: "#2b2b2b",
    cardHover: "#333333",
    accent: "#60cdff",
    text: "#ffffff",
    textSec: "#a0a0a0",
    border: "rgba(255,255,255,0.05)",
  };

  const menuItems = [{ text: "Ad System", icon: <Monitor /> }];

  const handleBack = () => {
    setActiveSection(null);
  };

  const SettingCard = ({ icon, title, subtitle, onClick, action }) => (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        mb: 0.5,
        bgcolor: colors.card,
        borderRadius: 1,
        border: `1px solid ${colors.border}`,
        cursor: onClick ? "pointer" : "default",
        transition: "0.2s",
        "&:hover": onClick ? { bgcolor: colors.cardHover } : {},
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
        {subtitle && (
          <Typography variant="caption" sx={{ color: colors.textSec }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box sx={{ ml: 2 }}>
        {action
          ? action
          : onClick && <ChevronRight sx={{ color: colors.textSec }} />}
      </Box>
    </Paper>
  );

  const DisplaySection = () => (
    <Box sx={{ animation: "fadeIn 0.3s ease" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Brightness & color
        </Typography>
        <Paper
          sx={{
            p: 2,
            bgcolor: colors.card,
            borderRadius: 1,
            border: `1px solid ${colors.border}`,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Brightness6 sx={{ color: colors.textSec }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Brightness
              </Typography>
              <Slider
                defaultValue={70}
                size="small"
                sx={{ color: colors.accent }}
              />
            </Box>
          </Stack>
        </Paper>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          AdBlocker-Blocker
        </Typography>
        <SettingCard
          icon={<DoNotDisturb />}
          title="Block AdBlocker"
          subtitle="Use AdBlocker-Blocker to block AdBlockers"
          action={
            <Switch
              onChange={handleRouting}
              defaultChecked
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": { color: colors.accent },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: colors.accent,
                },
              }}
            />
          }
        />
      </Box>
    </Box>
  );

  const SoundSection = () => (
    <Box sx={{ animation: "fadeIn 0.3s ease" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Output
        </Typography>
        <Paper
          sx={{
            p: 2,
            bgcolor: colors.card,
            borderRadius: 1,
            border: `1px solid ${colors.border}`,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <VolumeDown sx={{ color: colors.textSec }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Master volume
              </Typography>
              <Slider
                defaultValue={45}
                size="small"
                sx={{ color: colors.accent }}
              />
            </Box>
            <Typography>101</Typography>
          </Stack>
        </Paper>
      </Box>
      <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
        Input
      </Typography>
      <SettingCard
        icon={<VolumeUp />}
        title="Microphone Array"
        subtitle="Realtech(R) Audio"
        action={<ChevronRight sx={{ color: colors.textSec }} />}
      />
    </Box>
  );

  const NotificationSection = () => (
    <Box sx={{ animation: "fadeIn 0.3s ease" }}>
      <SettingCard
        icon={<NotificationsNone />}
        title="Notifications"
        subtitle="Get notifications from apps and other senders"
        action={
          <Switch
            defaultChecked
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": { color: colors.accent },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: colors.accent,
              },
            }}
          />
        }
      />
      <SettingCard
        icon={<DoNotDisturb />}
        title="Do not disturb"
        subtitle="Notifications will be sent directly to notification center"
        action={
          <Switch
            onChange={handleDisturbing}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": { color: colors.accent },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: colors.accent,
              },
            }}
          />
        }
      />
    </Box>
  );

  const RecoverySection = () => (
    <Box sx={{ animation: "fadeIn 0.3s ease" }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: colors.textSec, mb: 2 }}>
          {`If you're having problems with your PC or want to reset it, these
          recovery options might help.`}
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Recovery options
      </Typography>

      <Paper
        sx={{
          p: 2,
          bgcolor: colors.card,
          borderRadius: 1,
          border: `1px solid ${colors.border}`,
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1">
            Fix problems without resetting the site
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{ color: colors.text, borderColor: colors.border }}
          onClick={handleClick({ vertical: "top", horizontal: "right" })}
        >
          Fix now
        </Button>
      </Paper>

      <Paper
        sx={{
          p: 2,
          bgcolor: colors.card,
          borderRadius: 1,
          border: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1">Reset this site</Typography>
          <Typography variant="caption" sx={{ color: colors.textSec }}>
            Choose to keep or remove ad files
          </Typography>
        </Box>
        <Button
          onClick={() => setOpenModal(true)}
          variant="contained"
          sx={{ bgcolor: colors.cardHover, color: colors.text }}
        >
          Reset Site
        </Button>
      </Paper>
    </Box>
  );

  const renderRightPanelContent = () => {
    if (activeSection) {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <IconButton
              onClick={handleBack}
              sx={{
                color: colors.text,
                mr: 2,
                border: `1px solid ${colors.border}`,
                borderRadius: 1,
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h5" fontWeight="bold">
              {activeSection}
            </Typography>
          </Box>

          {activeSection === "Display" && <DisplaySection />}
          {activeSection === "Sound" && <SoundSection />}
          {activeSection === "Notifications" && <NotificationSection />}
          {activeSection === "Recovery" && <RecoverySection />}
        </Box>
      );
    }

    if (activeTab === "Ad System") {
      return (
        <>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Computer sx={{ fontSize: 64, color: colors.textSec, mr: 3 }} />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Googel Adsense
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <SettingCard
              icon={<Monitor />}
              title="Display"
              subtitle="Monitors, brightness, night light, display profile"
              onClick={() => setActiveSection("Display")}
            />
            <SettingCard
              icon={<VolumeUp />}
              title="Sound"
              subtitle="Volume levels, output, input, sound devices"
              onClick={() => setActiveSection("Sound")}
            />
            <SettingCard
              icon={<NotificationsNone />}
              title="Notifications"
              subtitle="Alerts from apps and system, do not disturb"
              onClick={() => setActiveSection("Notifications")}
            />
            <SettingCard
              icon={<RestartAlt />}
              title="Recovery"
              subtitle="Reset, advanced startup, go back"
              onClick={() => setActiveSection("Recovery")}
            />
          </Box>
        </>
      );
    }

    return (
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
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        bgcolor: colors.bg,
        color: colors.text,
        overflow: "hidden",
        fontFamily: '"Segoe UI", sans-serif',
      }}
    >
      <Box
        sx={{
          width: 280,
          bgcolor: colors.sidebar,
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRight: `1px solid ${colors.border}`,
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
        </Paper>

        <Box sx={{ flex: 1, overflowY: "auto", mx: -1, px: 1 }}>
          <List dense>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                selected={activeTab === item.text}
                onClick={() => {
                  setActiveTab(item.text);
                  setActiveSection(null);
                }}
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
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          {activeSection ? "" : activeTab}
        </Typography>

        {renderRightPanelContent()}
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Fix yourself first!"
        key={vertical + horizontal}
      />
      <Modal
        open={openModal}
        //onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper elevation={8}>
          <Typography sx={{ p: 4 }}>Are You Sure?</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", p: 2, gap: 2 }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setOpenModalModal(true);
                handleCloseModal();
              }}
            >
              Yes, my name is Sure
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseModal}
            >
              Maybe
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseModal}
            >
              No, never
            </Button>
          </Box>
        </Paper>
      </Modal>
      <Modal
        open={openModalModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper elevation={8}>
          <Typography sx={{ p: 4 }}>Are You Really Sure?</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", p: 2, gap: 2 }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setOpenModalModalModal(true);
                handleCloseModalModal();
              }}
            >
              Yes, my father is also Sure
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseModalModal}
            >
              Am i Sure?
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseModalModal}
            >
              No, never ever
            </Button>
          </Box>
        </Paper>
      </Modal>
      <Modal
        open={openModalModalModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper elevation={8}>
          <Typography sx={{ p: 4 }}>Are You Really Really Sure?</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", p: 2, gap: 2 }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setLoading(true);
                setTimeout(handleResetting, 5000);
              }}
            >
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                "Yes, everyone is Sure"
              )}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseModalModalModal}
            >
              Probably i am not Sure
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseModalModalModal}
            >
              No, never ever ever
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

export default DownloadSettingsModal4;
