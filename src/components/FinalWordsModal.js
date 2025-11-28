import { Typography, Paper, Button } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function FinalWordsModal() {
  const style = {
    py: 0,
    width: "100%",
    maxWidth: 550,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
      <List sx={style}>
        <ListItem>
          <ListItemText primary="1- Finally i finished the game and released it." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="2- The project took almost 6 months to be made. Of course i didn't work on it everyday. There were a lot of break due to some conditions." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="3- Actually the game still isn't finished. I will add 2nd ending to the game but firstly i have to finish this ending." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="4- Yes, there is 2nd Ending (I hope i didn't forget adding). Just go to the last level and find it." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="5- I admit that I used AI so much to make dummy applications look like real ones. Oh, also correcting errors and features i don't know. So yes, i used them very well." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            primary="7- I would love to read your feedbacks but!..
      
        Unfortunately, this game was developed with only react and for this
        reason all game you played was just pure front-end.
      
        Therefore, There is no back-end, server, to get and store feedbacks."
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="8- I hope you enjoyed well. Please don't be angry with me because of the tiny miny little 'jokes'. It's narrator's fault. Yes,shame on him!" />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={{ alignItems: "center", justifyContent: "center" }}>
          <a href="/">
            <Button variant="contained" color="success" sx={{ m: 1 }}>
              Play Again?
            </Button>
          </a>
        </ListItem>
      </List>
    </Paper>
  );
}

export default FinalWordsModal;
