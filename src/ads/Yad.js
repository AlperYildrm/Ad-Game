import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Cheesead from "../../public/images/cheesead.png";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";

function Yad() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={Cheesead}
          alt="Ayran but dry"
          width={800}
          height={500}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>

      <IconButton
        component={Link}
        href="/4-feedback"
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

export default Yad;
