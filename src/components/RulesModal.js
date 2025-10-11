import { Typography, Paper } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

function RulesModal() {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
      <List sx={style}>
        <ListItem>
          <ListItemText primary="1- This is just a game. Do not get offended or angry, just have fun!" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="2- Not everything necessarily has a meaning. I put random things just for fun. Call them easter eggs! " />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="3- For the best experience, using chrome-based browser on a computer is recommended. Also this game cannot be responsive so cannot be played on a phone either." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="4- Every level can be beaten. I tested again and again... If you cannot, you are just not enough smart to pass." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="5- If you want to listen to narrator again or reset a level, just go previous page and come back. Do not refresh the page." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="7- I forgot to add sixth rule." />
        </ListItem>
      </List>
    </Paper>
  );
}

export default RulesModal;
