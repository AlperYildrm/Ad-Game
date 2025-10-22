import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Paper } from "@mui/material";

function page() {
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

export default page;
