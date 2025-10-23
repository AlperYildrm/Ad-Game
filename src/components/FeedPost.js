import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Box, Paper, Modal } from "@mui/material";
import FeedComments from "./FeedComments";
import MyphonePlusModal from "./MyphonePlusModal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function FeedPost({ user }) {
  const [expanded, setExpanded] = useState(false);
  const [openPlus, setOpenPlus] = useState(false);
  const handleOpenPlus = () => setOpenPlus(true);
  const HandleClosePlus = () => setOpenPlus(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={5}>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="User Avatar">
              {user.avatarLetter}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleOpenPlus}>
              <MoreVertIcon />
            </IconButton>
          }
          title={user.postTitle}
          subheader={user.postDate}
        />
        <CardMedia
          component="img"
          height="auto"
          image={user.postAd}
          alt="Post Ad"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {user.postExplaination}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like" onClick={handleOpenPlus}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleOpenPlus}>
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <FeedComments comments={user.comments} />
          </CardContent>
        </Collapse>
      </Card>
      <Modal
        open={openPlus}
        onClose={HandleClosePlus}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyphonePlusModal />
      </Modal>
    </Paper>
  );
}

export default FeedPost;
