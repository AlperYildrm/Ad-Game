import { Button } from "@mui/material";
import React from "react";
import Link from "next/link";

function StartButton() {
  return (
    <Link href="/1-thankyou" passHref>
      <Button variant="contained" color="primary" size="large" fullWidth>
        Start Game
      </Button>
    </Link>
  );
}

export default StartButton;
