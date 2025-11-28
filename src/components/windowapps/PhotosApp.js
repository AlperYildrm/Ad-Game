import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Modal,
  Paper,
  Button,
  Slider,
} from "@mui/material";
import {
  ArrowBack,
  DeleteOutlined,
  FavoriteBorder,
  InfoOutlined,
  Crop,
  RotateRight,
  ZoomIn,
  ZoomOut,
  Share,
  Print,
  MoreHoriz,
  Edit,
} from "@mui/icons-material";
import DeleteModal from "./DeleteModal";

const PhotosApp = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [zoom, setZoom] = useState(100);

  const handleOpen = () => setOpenDelete(true);
  const handleClose = () => setOpenDelete(false);

  const colors = {
    bg: "#202020",
    toolbar: "rgba(32, 32, 32, 0.95)",
    text: "#ffffff",
    icon: "#ffffff",
    modal: "#2b2b2b",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: colors.bg,
        color: colors.text,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: 48,
          bgcolor: "transparent",
          display: "flex",
          alignItems: "center",
          px: 2,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      >
        <Typography variant="caption" sx={{ color: "white", ml: 1 }}>
          window.ad
        </Typography>
      </Box>

      <Box
        sx={{
          height: 60,
          bgcolor: colors.toolbar,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          mt: 5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: colors.icon }}>
            <ZoomOut fontSize="small" />
          </IconButton>
          <Slider
            size="small"
            value={zoom}
            min={10}
            max={200}
            onChange={(e, v) => setZoom(v)}
            sx={{
              width: 100,
              color: "white",
              "& .MuiSlider-thumb": { width: 12, height: 12 },
            }}
          />
          <IconButton size="small" sx={{ color: colors.icon }}>
            <ZoomIn fontSize="small" />
          </IconButton>
        </Box>

        <Box
          sx={{ height: 24, width: 1, bgcolor: "rgba(255,255,255,0.2)", mx: 1 }}
        />

        <IconButton size="small" sx={{ color: colors.icon }}>
          <RotateRight fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.icon }}>
          <Crop fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.icon }}>
          <Edit fontSize="small" />
        </IconButton>

        <Box
          sx={{ height: 24, width: 1, bgcolor: "rgba(255,255,255,0.2)", mx: 1 }}
        />

        <IconButton size="small" sx={{ color: colors.icon }}>
          <Share fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.icon }}>
          <Print fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.icon }}>
          <FavoriteBorder fontSize="small" />
        </IconButton>
        <IconButton
          onClick={handleOpen}
          size="small"
          sx={{ color: colors.icon }}
        >
          <DeleteOutlined fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.icon }}>
          <InfoOutlined fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: colors.icon }}>
          <MoreHoriz fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          p: 4,
          bgcolor: "#111",
        }}
      >
        <Box
          component="img"
          src="/images/windowsad.png"
          alt="Windows Ad"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transform: `scale(${zoom / 100})`,
            transition: "transform 0.1s",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />
      </Box>

      <Modal
        open={openDelete}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <DeleteModal handleClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default PhotosApp;
