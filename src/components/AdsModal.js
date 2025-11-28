import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Paper } from "@mui/material";

function AdsModal() {
  const itemData = [
    {
      img: "/images/dormad.png",
      title: "Dorm",
    },
    {
      img: "/images/nutzillaad.png",
      title: "Nutzilla",
    },
    {
      img: "/images/adad.png",
      title: "Ad",
    },
    {
      img: "/images/lickit.png",
      title: "Lickit",
    },
    {
      img: "/images/betsitead.png",
      title: "Betsite",
    },
    {
      img: "/images/blacksmithad.png",
      title: "Blacksmith",
    },
    {
      img: "/images/cheesead.png",
      title: "Cheese",
    },
    {
      img: "/images/cryptoad.png",
      title: "Crypto Coin",
    },
    {
      img: "/images/didiad.png",
      title: "Didi",
    },
    {
      img: "/images/cyberad.png",
      title: "Cyber Security",
    },
    {
      img: "/images/discard.png",
      title: "Discard",
    },
    {
      img: "/images/gymad.png",
      title: "Gym",
    },
    {
      img: "/images/holidayad.png",
      title: "Holiday",
    },
    {
      img: "/images/mustardad.png",
      title: "Mustard",
    },
    {
      img: "/images/otoparkad.png",
      title: "Otopark",
    },
    {
      img: "/images/samsunad.png",
      title: "Samsun55",
    },
    {
      img: "/images/sauad.png",
      title: "SAU",
    },
    {
      img: "/images/Xad.png",
      title: "X",
    },
    {
      img: "/images/windowsad.png",
      title: "Window",
    },
  ];
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, borderRadius: 3, maxWidth: 540, mx: "auto", mt: 3 }}
    >
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Paper>
  );
}

export default AdsModal;
