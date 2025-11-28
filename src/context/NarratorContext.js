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

  const [durationScale, setDurationScale] = useState(1.0);

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

      const effectiveDuration = duration * durationScale;

      const hideId = setTimeout(() => setVisible(false), effectiveDuration);
      timersRef.current.push(hideId);
    },
    [stopNarrator, durationScale]
  );

  const showNarratorSequence = useCallback(
    (messages, gap = 500, onComplete = null) => {
      stopNarrator();
      const myToken = ++seqTokenRef.current;

      let delay = 0;

      messages.forEach(({ message, duration }) => {
        const effectiveDuration = duration * durationScale;
        const effectiveGap = gap * durationScale;

        const showId = setTimeout(() => {
          if (seqTokenRef.current !== myToken) return;

          setText(message);
          setVisible(true);

          const hideId = setTimeout(() => {
            if (seqTokenRef.current !== myToken) return;
            setVisible(false);
          }, effectiveDuration);

          timersRef.current.push(hideId);
        }, delay);

        timersRef.current.push(showId);

        delay += effectiveDuration + effectiveGap;
      });

      if (onComplete) {
        const finishId = setTimeout(() => {
          if (seqTokenRef.current !== myToken) return;
          onComplete();
        }, delay);

        timersRef.current.push(finishId);
      }
    },
    [stopNarrator, durationScale]
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
        durationScale,
        setDurationScale,
      }}
    >
      {children}
    </NarratorContext.Provider>
  );
};

export const useNarrator = () => useContext(NarratorContext);
