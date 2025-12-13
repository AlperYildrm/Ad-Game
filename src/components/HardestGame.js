"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useSound } from "@/context/SoundContext";

function HardestGame() {
  const { playSound } = useSound();

  const handleMusic = (sound) => playSound(sound);
  const canvasRef = useRef(null);
  const [isInsideGoal, setIsInsideGoal] = useState(false);

  useEffect(() => {
    if (isInsideGoal) {
      playSound("completedsound");
    }
  }, [isInsideGoal, playSound]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const W = 600;
    const H = 300;
    canvas.width = W;
    canvas.height = H;

    const border = { x: 80, y: 40, w: W - 160, h: H - 80 };

    const startZone = { x: 0, y: 80, w: 80, h: 140 };
    const goalZone = { x: W - 80, y: 80, w: 80, h: 140 };

    const goalCircle = {
      x: goalZone.x + goalZone.w / 2,
      y: goalZone.y + goalZone.h / 2,
      r: 20,
    };

    const player = { x: startZone.x + 40, y: H / 2, size: 24 };

    const enemies = [];
    const cols = 12;
    const spacingX = border.w / (cols + 1);
    const topLimit = border.y + 20;
    const bottomLimit = border.y + border.h - 20;

    for (let i = 0; i < cols; i++) {
      const x = border.x + spacingX * (i + 1);
      const startY = i % 2 === 0 ? topLimit : bottomLimit;
      const direction = i % 2 === 0 ? 240 : -240;
      enemies.push({
        x,
        y: startY,
        r: 10,
        dy: direction,
        minY: topLimit,
        maxY: bottomLimit,
      });
    }

    // Kontroller
    const keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    };
    function handleKeyDown(e) {
      if (e.key in keys) keys[e.key] = true;
    }
    function handleKeyUp(e) {
      if (e.key in keys) keys[e.key] = false;
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Reset
    function resetPlayer() {
      player.x = startZone.x + startZone.w / 2;
      player.y = H / 2;
    }

    function isPlayerInGoal() {
      const dx = player.x - goalCircle.x;
      const dy = player.y - goalCircle.y;
      return Math.sqrt(dx * dx + dy * dy) < goalCircle.r;
    }

    // Simple check if player is touching the border (only top/bottom walls)
    function isPlayerTouchingBorder() {
      const playerRadius = player.size / 2;

      // Don't reset if in start or goal zones
      const inStartZone =
        player.x >= startZone.x &&
        player.x <= startZone.x + startZone.w &&
        player.y >= startZone.y &&
        player.y <= startZone.y + startZone.h;

      const inGoalZone =
        player.x >= goalZone.x &&
        player.x <= goalZone.x + goalZone.w &&
        player.y >= goalZone.y &&
        player.y <= goalZone.y + goalZone.h;

      if (inStartZone || inGoalZone) {
        return false;
      }

      // Check if touching only TOP or BOTTOM borders (no left/right walls)
      return (
        player.y - playerRadius <= border.y ||
        player.y + playerRadius >= border.y + border.h
      );
    }

    // Çarpışma
    function checkCollisions() {
      enemies.forEach((e) => {
        const dx = player.x - e.x;
        const dy = player.y - e.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < e.r + player.size * 0.4) {
          resetPlayer();
        }
      });

      // Check border collision
      if (isPlayerTouchingBorder()) {
        handleMusic("bruh");
        resetPlayer();
      }
    }

    // Oyun döngüsü
    let lastTime = performance.now();
    let rafId;
    function loop(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Player hareket
      const speed = 160;
      if (keys.ArrowUp) player.y -= speed * dt;
      if (keys.ArrowDown) player.y += speed * dt;
      if (keys.ArrowLeft) player.x -= speed * dt;
      if (keys.ArrowRight) player.x += speed * dt;

      // Keep player in bounds (but allow free movement in valid areas)
      const playerRadius = player.size / 2;
      const totalMinX = 0;
      const totalMaxX = W;
      const totalMinY = border.y;
      const totalMaxY = border.y + border.h;

      player.x = Math.max(
        totalMinX + playerRadius,
        Math.min(player.x, totalMaxX - playerRadius)
      );
      player.y = Math.max(
        totalMinY + playerRadius,
        Math.min(player.y, totalMaxY - playerRadius)
      );

      // Enemies hareket
      enemies.forEach((e) => {
        e.y += e.dy * dt;
        if (e.y < e.minY || e.y > e.maxY) {
          e.dy *= -1;
          e.y = Math.max(e.minY, Math.min(e.y, e.maxY));
        }
      });

      checkCollisions();
      setIsInsideGoal(isPlayerInGoal());

      draw();
      rafId = requestAnimationFrame(loop);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw only TOP and BOTTOM borders (no vertical walls)
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;

      // Top border
      ctx.beginPath();
      ctx.moveTo(border.x, border.y);
      ctx.lineTo(border.x + border.w, border.y);
      ctx.stroke();

      // Bottom border
      ctx.beginPath();
      ctx.moveTo(border.x, border.y + border.h);
      ctx.lineTo(border.x + border.w, border.y + border.h);
      ctx.stroke();

      // Başlangıç ve bitiş bölgeleri
      ctx.fillStyle = "lightgreen";
      ctx.fillRect(startZone.x, startZone.y, startZone.w, startZone.h);
      ctx.fillRect(goalZone.x, goalZone.y, goalZone.w, goalZone.h);

      // Sarı daire (hedef)
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(goalCircle.x, goalCircle.y, goalCircle.r, 0, Math.PI * 2);
      ctx.fill();

      // Mavi toplar
      ctx.fillStyle = "blue";
      enemies.forEach((e) => {
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Oyuncu (X)
      ctx.fillStyle = "black";
      ctx.font = `${player.size}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("X", player.x, player.y);
    }

    resetPlayer();
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          margin: "0 auto",
          backgroundColor: "transparent",
        }}
      />
      {isInsideGoal && (
        <IconButton
          component={Link}
          href="/10-blackout"
          sx={{
            position: "absolute",
            top: 130,
            right: 20,
            backgroundColor: "rgba(255,255,255,1)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
}

export default HardestGame;
