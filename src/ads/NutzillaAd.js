"use client";

import React, { useState } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Nutzillaad from "../../public/images/nutzillaad.png";
import Link from "next/link";
import Image from "next/image";
import InformationInformation from "@/components/InformationInformation";

function NutzillaAd() {
  const [hover, setHover] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: 450,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!infoClicked ? (
        <>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <Image
              src={Nutzillaad}
              alt="NUTZILAAAAA"
              width={450}
              height={600}
              style={{ borderRadius: "8px", cursor: "pointer" }}
            />
          </Link>

          {!hover && (
            <IconButton
              component={Link}
              href="/7-war-declaration"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(255,255,255,0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,1)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          )}

          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              left: 8,
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "4px",
              px: 1,
              py: 0.2,
              cursor: "pointer",
            }}
            onClick={() => setInfoClicked(true)}
          >
            <Typography variant="caption" sx={{ fontSize: "0.7rem", mr: 0.5 }}>
              Ads by Googel
            </Typography>
            <InfoOutlinedIcon sx={{ fontSize: "0.9rem", color: "#555" }} />
          </Box>
        </>
      ) : (
        <InformationInformation />
      )}
    </Box>
  );
}

export default NutzillaAd;
