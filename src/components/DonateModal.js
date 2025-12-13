import * as React from "react";
import { useEffect } from "react";
import { useSound } from "@/context/SoundContext";

function DonateModal() {
  const { playSound } = useSound();
  const handleMusic = () => playSound("chinesedonate");
  useEffect(() => {
    handleMusic();
  }, []);
  return (
    <img
      src="/images/socialcredit.jpg"
      alt="Awww thank youu but no need due to adverts"
    />
  );
}

export default DonateModal;
