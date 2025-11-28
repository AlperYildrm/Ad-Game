import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, InputBase } from "@mui/material";

const CmdApp = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Makrosoft Window [Version 10.0.22621.1]",
    "(c) Makrosoft Corporation. All rights reserved.",
    "",
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      const newHistory = [...history, `C:\\Users\\Lunix>${input}`];

      if (cmd) {
        const lowerCmd = cmd.toLowerCase();
        switch (lowerCmd.split(" ")[0]) {
          case "help":
            newHistory.push(
              "CLS        Clear screen",
              "DIR        List directory",
              "ECHO       Display message",
              "VER        Display version",
              "HELP       Show help",
              "SA         Say hello",
              "WHY        Learn truth"
            );
            break;
          case "cls":
          case "clear":
            setHistory([]);
            setInput("");
            return;
          case "dir":
            newHistory.push(
              " Volume in drive C has no label.",
              " Volume Serial Number is A1B2-C3D4",
              "",
              " Directory of C:\\Users\\Lunix",
              "",
              "11/23/2025  10:00 AM    <DIR>          .",
              "11/23/2025  10:00 AM    <DIR>          ..",
              "11/22/2025  04:20 PM    <DIR>          Desktop",
              "11/22/2025  04:20 PM    <DIR>          Documents",
              "11/22/2025  04:20 PM    <DIR>          Downloads",
              "11/23/2025  09:15 AM             1,024 secret.txt",
              "               1 File(s)          1,024 bytes",
              "               4 Dir(s)      676,931 bytes free"
            );
            break;
          case "ver":
            newHistory.push("Makrosoft Window [Version 10.0.22621.1]");
            break;
          case "echo":
            newHistory.push(cmd.substring(5));
            break;
          case "sa":
            newHistory.push("Wa alaikum salam");
            break;
          case "why":
            newHistory.push(
              "Just because the levels name is 'cmd' does not mean the solution is there.",
              "I just wanted you to look cmd app, for this reason i named 'cmd'.",
              "I made huge amount of efford while making this section. Respect the efford."
            );
            break;
          default:
            newHistory.push(
              `'${cmd}' is not recognized as an internal or external command,`,
              "operable program or batch file."
            );
        }
      } else {
      }

      newHistory.push("");
      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#0c0c0c",
        color: "#cccccc",
        height: "100%",
        width: "100%",
        p: 1,
        fontFamily: "Consolas, 'Courier New', monospace",
        fontSize: "1rem",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => document.getElementById("cmd-input")?.focus()}
    >
      {history.map((line, i) => (
        <Typography
          key={i}
          sx={{
            fontFamily: "inherit",
            fontSize: "inherit",
            whiteSpace: "pre-wrap",
            lineHeight: 1.2,
          }}
        >
          {line}
        </Typography>
      ))}

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: "inherit",
            whiteSpace: "pre",
            lineHeight: 1.2,
            mr: 1,
          }}
        >
          C:\Users\Lunix&gt;
        </Typography>
        <InputBase
          id="cmd-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          sx={{
            fontFamily: "inherit",
            fontSize: "inherit",
            color: "inherit",
            flex: 1,
            p: 0,
          }}
        />
      </Box>
      <div ref={bottomRef} />
    </Box>
  );
};

export default CmdApp;
