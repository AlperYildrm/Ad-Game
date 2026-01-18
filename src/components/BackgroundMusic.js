"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSound } from "../context/SoundContext";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const pathname = usePathname();
  const { isMusicEnabled } = useSound();

  useEffect(() => {
    audioRef.current = new Audio("/sounds/backgroundmusic.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // Set a reasonable default volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const isExcludedPage =
      pathname.includes("15-enough") || pathname.includes("The-End");

    if (isMusicEnabled && !isExcludedPage) {
      // Attempt to play
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          console.log("Autoplay prevented:", error);
        });
      }
    } else {
      audio.pause();
    }
  }, [pathname, isMusicEnabled]);

  return null;
};

export default BackgroundMusic;
