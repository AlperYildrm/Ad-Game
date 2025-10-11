import React from "react";
import { Box, IconButton } from "@mui/material";
import Blacksmithad from "../../public/images/blacksmithad.png";
import HardestGame from "@/components/HardestGame";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";

function BlackAd() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <HardestGame />
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={Blacksmithad}
          alt="Fine Armors"
          width={600}
          height={375}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>

      <InformationButton />
    </Box>
  );
}

export default BlackAd;
