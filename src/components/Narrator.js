"use client";

import React from "react";
import { useNarrator } from "../context/NarratorContext";
import "./Narrator.css";
import { Box } from "@mui/material";

const Narrator = () => {
  const { text, visible, type } = useNarrator();
  if (!visible) return null;

  return <Box className={`narrator-box ${type}`}>{text}</Box>;
};

export default Narrator;
