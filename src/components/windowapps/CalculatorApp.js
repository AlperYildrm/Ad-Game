import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import {
  Menu as MenuIcon,
  History,
  BackspaceOutlined,
  OpenInFull,
} from "@mui/icons-material";

function CalculatorApp() {
  const [display, setDisplay] = useState("Do your own math");

  const colors = {
    bg: "#202020",
    btnNum: "#3b3b3b",
    btnFunc: "#323232",
    btnEqual: "#4cc2ff",
    text: "#ffffff",
    textDim: "#a0a0a0",
    hover: "rgba(255,255,255,0.05)",
  };

  const baseBtnStyle = {
    minWidth: 0,
    borderRadius: 1,
    fontSize: "1rem",
    fontWeight: 400,
    textTransform: "none",
    color: colors.text,
    boxShadow: "none",
    height: "100%",
    fontFamily: '"Segoe UI", sans-serif',
    "&:hover": { bgcolor: colors.hover },
    "&:active": { transform: "scale(0.98)" },
  };

  const NumberBtn = ({ label, wide = false }) => (
    <Button
      fullWidth
      sx={{
        ...baseBtnStyle,
        bgcolor: colors.btnNum,
        fontSize: "1.25rem",
        fontWeight: 600,
        gridColumn: wide ? "span 2" : "auto",
        "&:hover": { bgcolor: "#3f3f3f" },
      }}
    >
      {label}
    </Button>
  );

  const FuncBtn = ({ label, icon }) => (
    <Button
      fullWidth
      sx={{
        ...baseBtnStyle,
        bgcolor: colors.btnFunc,
        fontSize: "1rem",
        "&:hover": { bgcolor: "#3a3a3a" },
      }}
    >
      {icon ? icon : label}
    </Button>
  );

  const EqualBtn = () => (
    <Button
      fullWidth
      sx={{
        ...baseBtnStyle,
        bgcolor: colors.btnEqual,
        color: "#000",
        fontSize: "1.5rem",
        fontWeight: 400,
        "&:hover": { bgcolor: "#47b1e8" },
      }}
    >
      =
    </Button>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: colors.bg,
        color: "white",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          height: 48,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton size="small" sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
            Standard
          </Typography>
          <IconButton size="small" sx={{ color: "white", ml: -1 }}>
            <OpenInFull sx={{ fontSize: 16, transform: "rotate(90deg)" }} />
          </IconButton>
        </Box>
        <IconButton size="small" sx={{ color: "white" }}>
          <History fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          px: 2,
          pb: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: display.length > 9 ? "3rem" : "4rem",
            textAlign: "right",
            lineHeight: 1,
          }}
        >
          {display}
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, px: 1 }}
      >
        {["MC", "MR", "M+", "M-", "MS"].map((m) => (
          <Button
            key={m}
            variant="text"
            size="small"
            disabled={m === "MC" || m === "MR"}
            sx={{
              color: "white",
              minWidth: 0,
              fontSize: "0.75rem",
              fontWeight: "bold",
              opacity: m === "MC" || m === "MR" ? 0.5 : 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            {m}
          </Button>
        ))}
        <Button
          variant="text"
          size="small"
          disabled
          sx={{
            color: "white",
            minWidth: 0,
            fontSize: "0.75rem",
            fontWeight: "bold",
            opacity: 0.5,
          }}
        >
          M▾
        </Button>
      </Box>

      <Box
        sx={{
          flex: "0 0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          gap: "2px",
          p: "2px",
          height: "65%",
        }}
      >
        <FuncBtn label="%" />
        <FuncBtn label="CE" />
        <FuncBtn label="C" />
        <FuncBtn icon={<BackspaceOutlined sx={{ fontSize: 18 }} />} />

        <FuncBtn
          label={
            <span>
              <sup>1</sup>/<sub>x</sub>
            </span>
          }
        />
        <FuncBtn
          label={
            <span>
              x<sup>2</sup>
            </span>
          }
        />
        <FuncBtn
          label={
            <span>
              <sup>2</sup>√x
            </span>
          }
        />
        <FuncBtn label="÷" />

        <NumberBtn label="7" />
        <NumberBtn label="8" />
        <NumberBtn label="9" />
        <FuncBtn label="×" />

        <NumberBtn label="4" />
        <NumberBtn label="5" />
        <NumberBtn label="6" />
        <FuncBtn label="-" />

        <NumberBtn label="1" />
        <NumberBtn label="2" />
        <NumberBtn label="3" />
        <FuncBtn label="+" />

        <NumberBtn label="+/-" />
        <NumberBtn label="0" />
        <NumberBtn label="," />
        <EqualBtn />
      </Box>
    </Box>
  );
}

export default CalculatorApp;
