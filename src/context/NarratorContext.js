"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

const NarratorContext = createContext(null);

export const NarratorProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const timersRef = useRef([]);
  const seqTokenRef = useRef(0);

  const pathname = usePathname();

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const stopNarrator = useCallback(() => {
    clearAllTimers();
    setVisible(false);
    setText("");
    seqTokenRef.current += 1;
  }, [clearAllTimers]);

  const showNarrator = useCallback(
    (message, duration = 4000) => {
      stopNarrator();
      setText(message);
      setVisible(true);
      const hideId = setTimeout(() => setVisible(false), duration);
      timersRef.current.push(hideId);
    },
    [stopNarrator]
  );

  const showNarratorSequence = useCallback(
    (messages, gap = 500) => {
      stopNarrator();
      const myToken = ++seqTokenRef.current;

      let delay = 0;
      messages.forEach(({ message, duration }) => {
        const showId = setTimeout(() => {
          if (seqTokenRef.current !== myToken) return;

          setText(message);
          setVisible(true);

          const hideId = setTimeout(() => {
            if (seqTokenRef.current !== myToken) return;
            setVisible(false);
          }, duration);

          timersRef.current.push(hideId);
        }, delay);

        timersRef.current.push(showId);
        delay += duration + gap;
      });
    },
    [stopNarrator]
  );

  useEffect(() => {
    stopNarrator();
  }, [pathname, stopNarrator]);

  return (
    <NarratorContext.Provider
      value={{
        text,
        visible,
        showNarrator,
        showNarratorSequence,
        stopNarrator,
      }}
    >
      {children}
    </NarratorContext.Provider>
  );
};

export const useNarrator = () => useContext(NarratorContext);
