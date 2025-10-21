import { Paper, Box } from "@mui/material";
import React from "react";
import FeedPost from "./FeedPost";
import { comment } from "postcss";

function FeedTemplate() {
  const users = [
    {
      avatarLetter: "U",
      postTitle: "BlackSmith With Better Hammer",
      postDate: "20 September 2025",
      postAd: "/images/blacksmithad.png",
      postExplaination:
        "This is the best Blacksmith in your country because they work with hammers. This is not the only difference though, also their hammers are 2 (yes two) sided! Come visit them now!",
      comments: [
        {
          id: 1,
          name: "Jane Doe",
          text: "This is amazing! 😍",
          date: "2h",
        },
        ,
      ],
    },
    {
      avatarLetter: "IDI",
      postTitle: "A Big Mustard Like You",
      postDate: "30 August 2016",
      postAd: "/images/mustardad.png",
      postExplaination:
        "Do you like mustard? Of course you do! Who doesn't like mustard? Come get your big mustard now!",
      comments: [
        {
          id: 1,
          name: "Jane Doe",
          text: "This is amazing! 😍",
          date: "2h",
        },
        ,
      ],
    },
    {
      avatarLetter: "OT",
      postTitle: "Samsun Galaksy E55",
      postDate: "4 January 2020",
      postAd: "/images/samsunad.png",
      postExplaination:
        "Wow! Samsun created a whole new phone with more cameras. From now on you can take 3 pictures at the same time!",
      comments: [
        {
          id: 1,
          name: "Jane Doe",
          text: "This is amazing! 😍",
          date: "2h",
        },
        ,
      ],
    },
    {
      avatarLetter: "BAS",
      postTitle: "You and the Didi",
      postDate: "31 February 2017",
      postAd: "/images/didiad.png",
      postExplaination: "Didi baby oil. Only for you...",
      comments: [
        {
          id: 1,
          name: "Jane Doe",
          text: "This is amazing! 😍",
          date: "2h",
        },
        ,
      ],
    },
    {
      avatarLetter: "TARD",
      postTitle: "Best Dishes in Dorms",
      postDate: "17 March 2021",
      postAd: "/images/dormad.png",
      postExplaination:
        "Don't you get tired of eating good sheets? Just try out our dorm dishes and miss good dishes more!",
      comments: [
        {
          id: 1,
          name: "Jane Doe",
          text: "This is amazing! 😍",
          date: "2h",
        },
        ,
      ],
    },
  ];
  return (
    <Paper
      elevation={8}
      sx={{
        padding: 3,
        //pl: 7,
        textAlign: "center",
        margin: "20px auto",
        mt: 0,
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
      }}
    >
      {users.map((user, index) => (
        <Box
          //elevation={5}
          sx={{ padding: 0, alignItems: "center", justifyContent: "center" }}
          key={index}
        >
          <FeedPost user={user} />
          <br />
          <br />
        </Box>
      ))}
    </Paper>
  );
}

export default FeedTemplate;
