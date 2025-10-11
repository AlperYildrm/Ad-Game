import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Holidayad from "../../public/images/holidayad.png";
import Link from "next/link";
import Image from "next/image";
import InformationButton from "@/components/InformationButton";

function HolidayAd() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Image
          src={Holidayad}
          alt="Ayran but dry"
          width={400}
          height={600}
          style={{ borderRadius: "8px", cursor: "pointer" }}
        />
      </Link>
      <InformationButton />
    </Box>
  );
}

export default HolidayAd;
