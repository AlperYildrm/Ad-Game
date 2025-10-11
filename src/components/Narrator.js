"use client";

import React from "react";
import { useNarrator } from "../context/NarratorContext";
import "./Narrator.css";
import { Box } from "@mui/material";

const Narrator = () => {
  const { text, visible } = useNarrator();
  if (!visible) return null;

  return <Box className="narrator-box">{text}</Box>;
};

export default Narrator;
