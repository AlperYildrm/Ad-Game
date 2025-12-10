"use client";

import React, { createContext, useContext, useCallback, useRef } from "react";

const SoundContext = createContext(null);

export const SoundProvider = ({ children }) => {
  const currentAudioRef = useRef(null);

  const playSound = useCallback((name, options = {}) => {
    try {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      }

      const fileName = name.endsWith(".mp3") ? name : `${name}.mp3`;
      const path = `/sounds/${fileName}`;

      const audio = new Audio(path);
      currentAudioRef.current = audio;

      if (options.volume) audio.volume = options.volume;
      if (options.loop) audio.loop = options.loop;

      audio.play().catch((err) => {
        console.warn(`Failed to play sound: ${path}`, err);
      });

      return audio;
    } catch (error) {
      console.error("Error in playSound:", error);
      return null;
    }
  }, []);

  return (
    <SoundContext.Provider value={{ playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};
