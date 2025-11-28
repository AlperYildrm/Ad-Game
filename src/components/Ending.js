import React, { useEffect, useState, useRef } from "react";
import { useNarrator } from "@/context/NarratorContext";
import { Paper, Box, Typography, GlobalStyles } from "@mui/material";
import { keyframes } from "@emotion/react";

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const glitchAnim = keyframes`
  0% { clip-path: inset(40% 0 61% 0); }
  20% { clip-path: inset(92% 0 1% 0); }
  40% { clip-path: inset(43% 0 1% 0); }
  60% { clip-path: inset(25% 0 58% 0); }
  80% { clip-path: inset(54% 0 7% 0); }
  100% { clip-path: inset(58% 0 43% 0); }
`;

const LOREM_TEXT =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non velit

      leo. Integer mollis enim ac magna condimentum, vel pulvinar lectus

      aliquam. Morbi at ullamcorper purus. Praesent ut bibendum magna.

      Pellentesque habitant morbi tristique senectus et netus et malesuada fames

      ac turpis egestas. Sed nec ultricies tortor. Donec at interdum arcu. Nam

      sollicitudin neque sit amet augue finibus, vel commodo neque sodales.

      Donec pulvinar nisi vitae faucibus laoreet. Morbi ligula nibh, condimentum

      eu lacus eget, pellentesque dapibus purus. Mauris nec metus in purus

      malesuada lacinia. Proin ut laoreet sapien. Vestibulum euismod quam est,

      sed scelerisque arcu mollis a. Sed ultrices ut lorem in sollicitudin.

      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per

      inceptos himenaeos. Morbi feugiat maximus sollicitudin. Vestibulum pretium

      dapibus semper. Sed leo mi, pretium sit amet lectus et, congue auctor

      ligula. Nullam eu tincidunt enim, vitae ultrices tortor. In a fringilla

      erat. Proin et hendrerit dolor. Etiam ante nulla, dictum lacinia venenatis

      non, dapibus a massa. Praesent et euismod justo, at pulvinar felis. Mauris

      viverra vitae turpis vitae venenatis. Nulla elementum elit eget pretium

      rhoncus. Aenean varius purus id tellus vulputate vestibulum. Nulla

      facilisi. Proin vitae ante mattis, tristique enim ac, fermentum magna. Ut

      id viverra neque. Curabitur pretium magna lacus, sit amet feugiat urna

      egestas sit amet. Praesent ut rutrum urna. Fusce sit amet justo ultricies,

      rutrum urna vel, venenatis augue. Donec id quam sagittis nulla eleifend

      laoreet quis sit amet leo. Aliquam dolor turpis, commodo maximus auctor

      auctor, feugiat a nulla. Nunc mi tortor, vulputate a augue sit amet,

      faucibus dictum nisl. Nunc ac ante arcu. Duis rutrum odio et quam

      ultricies dictum. Etiam ac ligula eu tellus faucibus convallis. Phasellus

      velit felis, commodo eget imperdiet sed, efficitur non eros. Mauris sed

      nulla eros. Nunc at tristique magna, non euismod augue. Quisque ut orci a

      nisi hendrerit lacinia vel non dui. Sed cursus vehicula placerat. Integer

      pulvinar porta velit eu molestie. Morbi urna orci, efficitur eget dapibus

      at, facilisis vel nisi. Mauris ut cursus nibh, a congue dui. Ut dapibus

      lectus ac lectus imperdiet sollicitudin. Mauris iaculis enim ex, in

      vehicula tellus luctus vel. Fusce blandit, eros sit amet mollis posuere,

      diam tellus ultricies arcu, sit amet fringilla massa turpis in urna. Nulla

      at metus nec ex tincidunt feugiat. Nullam lobortis dolor vel sagittis

      tempus. Pellentesque at felis arcu. Vestibulum gravida lectus et diam

      tincidunt cursus. Curabitur ultrices nulla eu quam volutpat, vitae

      facilisis lectus pharetra. Lorem ipsum dolor sit amet, consectetur

      adipiscing elit. In facilisis massa sed odio ornare blandit in lacinia

      orci. Quisque placerat elementum nibh nec commodo. Aliquam tempor risus

      vitae purus maximus, ut porta magna vulputate. Aliquam accumsan, felis ut

      malesuada fringilla, arcu mi sagittis massa, nec faucibus purus leo a

      turpis. Praesent et hendrerit eros, a iaculis ex. Quisque vitae massa

      tempus, vehicula odio sed, interdum ante. Suspendisse est quam, efficitur

      a sapien pharetra, pharetra rhoncus erat. Aenean ultricies ullamcorper

      leo. Nulla placerat et orci eget fringilla. Aliquam eget ante velit. Donec

      id aliquam est, quis mattis mauris. Curabitur in placerat augue. Etiam

      tempor vitae tortor in pellentesque. Cras nec mattis risus. Donec ultrices

      bibendum odio, ac ullamcorper velit gravida ac. Sed eu leo at nunc rhoncus

      commodo ac sit amet erat. Mauris ultrices venenatis posuere. Quisque

      venenatis est velit, sit amet bibendum mi laoreet efficitur. Fusce tempor,

      nisi quis tristique suscipit, nisi metus placerat elit, id bibendum ligula

      orci sit amet tortor. Donec imperdiet ut risus quis pretium. Aenean eget

      tellus vel felis tincidunt eleifend. Interdum et malesuada fames ac ante

      ipsum primis in faucibus. In sed lectus imperdiet, dictum sem ac, porta

      velit. Suspendisse tristique condimentum metus et molestie. Sed malesuada

      sodales ullamcorper. Sed imperdiet velit sit amet dolor dapibus, nec

      vestibulum ligula vulputate. Fusce iaculis sapien odio, at tempus ante

      mollis sodales. Praesent finibus hendrerit augue, viverra sollicitudin

      lorem imperdiet a. Phasellus finibus tristique sem, placerat convallis

      metus efficitur ac. Duis eget dolor vitae justo ultrices placerat vel non

      dui. Morbi porttitor vehicula dolor, sit amet congue enim pharetra vel.

      Nullam posuere lacus vitae libero posuere, id elementum sem euismod.

      Quisque placerat vestibulum risus, ut suscipit enim tincidunt in. In

      tincidunt nibh lectus. Ut dictum, ipsum nec convallis tincidunt, arcu elit

      blandit ipsum, sed vulputate massa nunc a justo. Mauris non iaculis est.

      Mauris fermentum metus ac ipsum lacinia, a ultrices justo maximus. Duis

      vitae consectetur magna, non euismod justo. Maecenas tellus enim, auctor

      quis augue a, egestas viverra diam. Sed fermentum venenatis nunc vitae

      mollis. Donec eget nunc quam. Fusce consequat, purus id feugiat dignissim,

      diam nisl aliquet justo, et rhoncus ligula odio sit amet magna. Ut

      elementum velit eu leo consequat euismod. Nulla dictum faucibus erat, vel

      pulvinar elit molestie eget. Vivamus ultricies ornare blandit. Sed ligula

      sapien, vestibulum eget purus eget, viverra viverra ante. Pellentesque eu

      quam sed enim malesuada scelerisque. Nunc vel congue augue, a mattis nisi.

      Sed a augue eget lectus ornare pretium quis ac massa. Suspendisse aliquet,

      augue eu imperdiet efficitur, enim turpis malesuada odio, eu pretium dolor

      erat in erat. Pellentesque habitant morbi tristique senectus et netus et

      malesuada fames ac turpis egestas. Duis condimentum sagittis dolor

      tristique pellentesque. Nulla dictum posuere mauris vitae consectetur. Ut

      auctor, orci et accumsan feugiat, justo felis convallis arcu, ullamcorper

      volutpat.`.split(" ");

function Ending() {
  const { showNarratorSequence } = useNarrator();
  const [displayedText, setDisplayedText] = useState(LOREM_TEXT);
  const [chaosLevel, setChaosLevel] = useState(0);
  const [deletedFiles, setDeletedFiles] = useState([]);
  const [isDead, setIsDead] = useState(false);

  const corruptionInterval = useRef(null);

  useEffect(() => {
    const messages = [
      { message: "REALLY!?", duration: 1000 },
      { message: "YOU HAVE ONLY ONE THING TO DO AND", duration: 2000 },
      { message: "HOW CAN YOU STILL...", duration: 2000 },
      {
        message: "DO YOU HAVE ANY IDEA OF WHAT YOU HAVE DONE?!",
        duration: 2500,
      },
      { message: "YUO SILMPY DLEEETD WOHLE STIE DTAA", duration: 3500 },
      { message: "WLIL YYYYUO TA*EKK R3SP0*NS1/BLE F*R TH-", duration: 4000 },
      { message: "Ğ", duration: 2000 },
      { message: "", duration: 3000 },
    ];

    showNarratorSequence(messages);

    const timers = [];

    timers.push(setTimeout(() => setChaosLevel(1), 1000));
    timers.push(setTimeout(() => setChaosLevel(3), 3000));
    timers.push(setTimeout(() => setChaosLevel(5), 5000));
    timers.push(setTimeout(() => setChaosLevel(8), 7500));
    timers.push(setTimeout(() => setChaosLevel(10), 11000));
    timers.push(setTimeout(() => setIsDead(true), 15000));

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (chaosLevel === 0) return;

    corruptionInterval.current = setInterval(() => {
      setDisplayedText((prev) => {
        if (chaosLevel > 4 && Math.random() > 0.7) {
          const newArr = [...prev];
          newArr.splice(Math.floor(Math.random() * newArr.length), 1);

          setDeletedFiles((d) =>
            [
              `Deleting sector 0x${Math.floor(Math.random() * 99999)}...`,
              ...d,
            ].slice(0, 5)
          );
          return newArr;
        }

        return prev.map((word) => {
          if (Math.random() < chaosLevel * 0.05) {
            const chars = "!@#$%^&*()_+-=[]{}|;':,./<>?█▓▒░";
            return word
              .split("")
              .map((c) =>
                Math.random() > 0.5
                  ? chars[Math.floor(Math.random() * chars.length)]
                  : c
              )
              .join("");
          }
          return word;
        });
      });
    }, 1000 / (chaosLevel || 1));

    return () => clearInterval(corruptionInterval.current);
  }, [chaosLevel]);

  if (isDead) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "#0000AA",
          color: "white",
          p: 4,
          fontFamily: "monospace",
        }}
      >
        <Typography variant="h4">FATAL ERROR</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Error code: 0x000000DEAD
        </Typography>
        <Typography variant="body1">System halted.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{ position: "relative", overflow: "hidden", p: 4, minHeight: "80vh" }}
    >
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: chaosLevel > 6 ? "#1a0000" : "white",
            transition: "background-color 2s ease",
          },
        }}
      />

      {chaosLevel > 4 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.3,
            pointerEvents: "none",
            color: "red",
            fontFamily: "monospace",
            p: 2,
            zIndex: 0,
          }}
        >
          {deletedFiles.map((file, i) => (
            <div key={i}>{file}</div>
          ))}
        </Box>
      )}

      <Paper
        elevation={chaosLevel > 5 ? 0 : 3}
        sx={{
          padding: 4,
          textAlign: "justify",
          backgroundColor: chaosLevel > 7 ? "transparent" : "background.paper",
          color: chaosLevel > 6 ? "red" : "text.primary",
          fontFamily: chaosLevel > 5 ? '"Courier New", monospace' : "inherit",
          animation:
            chaosLevel > 2
              ? `${shake} ${1.1 - chaosLevel / 10}s infinite`
              : "none",
          filter: chaosLevel > 5 ? "blur(1px) contrast(200%)" : "none",
          transform: chaosLevel > 8 ? "skew(20deg)" : "none",
          "&::before":
            chaosLevel > 8
              ? {
                  content: '"ERROR"',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(255,0,0,0.1)",
                  animation: `${glitchAnim} 2s infinite linear alternate-reverse`,
                }
              : {},
        }}
      >
        {displayedText.join(" ")}

        {chaosLevel > 3 && (
          <span style={{ wordBreak: "break-all" }}>
            {Array(chaosLevel * 20)
              .fill(0)
              .map(() => String.fromCharCode(33 + Math.random() * 93))
              .join("")}
          </span>
        )}
      </Paper>
    </Box>
  );
}

export default Ending;
