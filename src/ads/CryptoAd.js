import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Cryptoad from "../../public/images/cryptoad.png";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";
import TeleportingButton from "@/components/TeleportingButton";

function CryptoAd() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={Cryptoad}
          alt="coin"
          width={800}
          height={500}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>

      <TeleportingButton />
      <InformationButton />
    </Box>
  );
}

export default CryptoAd;
