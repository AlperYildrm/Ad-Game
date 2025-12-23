import { Typography, Paper, Button, Modal } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import LastFeedbackModal from "./LastFeedbackModal";
import Link from "next/link";

function FinalWordsModal() {
  const [open, setOpen] = useState(false);
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
          <ListItemText primary="3- To be honest, the game still isn't finished. I will add 2nd ending to the game but firstly i have to finish this ending." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="4- Yes, there is 2nd Ending (I hope i didn't forget adding). Just go to the last level and find it." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="5- This projects true purpose is gaining experience and getting used to developing react.Of course i still have a long way to go but at least i have learned a lot about React's builds, components etc. " />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="7- I admit that I used AI so much to make dummy applications look like real ones. Oh, also correcting errors and handling features i don't know. So yes, i used them very well." />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="8- I hope you enjoyed well. Please don't be angry with me because of the tiny miny little 'jokes'. It's narrator's fault. Yes,shame on him!" />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="error"
            sx={{ m: 1 }}
            onClick={() => setOpen(true)}
          >
            Give Me Feedback
          </Button>
        </ListItem>
        <Divider component="li" />
        <ListItem sx={{ alignItems: "center", justifyContent: "center" }}>
          <Link href="/">
            <Button variant="contained" color="success" sx={{ m: 1 }}>
              Play Again?
            </Button>
          </Link>
        </ListItem>
      </List>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <LastFeedbackModal />
      </Modal>
    </Paper>
  );
}

export default FinalWordsModal;
