import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Cyberad from "../../public/images/cyberad.png";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";

function CyberAd() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Link href="https://www.youtube.com/watch?v=qIAKrF_PhuI" target="_blank">
        <Image
          src={Cyberad}
          alt="Cyber Ad"
          width={300}
          height={400}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>

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
      <InformationButton />
    </Box>
  );
}

export default CyberAd;
