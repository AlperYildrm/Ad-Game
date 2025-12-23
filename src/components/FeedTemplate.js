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
          name: "Alex",
          text: "This is the first time seeing this Ad.",
          date: "5h",
        },
        {
          id: 2,
          name: "Ben",
          text: "Exactly three of us are telling the truth.",
          date: "12h",
        },
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
          id: 3,
          name: "Clara",
          text: "I commented on this Ad after Emma did.",
          date: "2w",
        },
        {
          id: 4,
          name: "Daniel",
          text: "Ben is lying.",
          date: "1m",
        },
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
          id: 5,
          name: "Emma",
          text: "Frank and Grace are both lying.",
          date: "3h",
        },
        {
          id: 6,
          name: "Frank",
          text: "Why people doesn't use MyPhone Plus? It's free btw.",
          date: "8h",
        },
      ],
    },
    {
      avatarLetter: "BAS",
      postTitle: "You and the Didi",
      postDate: "31 February 2025",
      postAd: "/images/didiad.png",
      postExplaination: "Didi baby oil. Only for you...",
      comments: [
        {
          id: 7,
          name: "Grace",
          text: "There is a problem with this post",
          date: "2y",
        },
        {
          id: 8,
          name: "Henry",
          text: "Ivy is lying.",
          date: "2w",
        },
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
          id: 9,
          name: "Ivy",
          text: "I am the oldest commenter here.",
          date: "1y",
        },
        {
          id: 10,
          name: "Julia",
          text: "Frank is telling the truth.",
          date: "5d",
        },
        {
          id: 11,
          name: "Kerem",
          text: "Your password is 'ADG'.",
          date: "35d but no 1m",
        },
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
