import {
  Modal,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

function DeleteModal({ handleClose }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      router.push("/15-enough");
    }, 2000);
  };

  return (
    <Paper
      sx={{
        bgcolor: "#222",
        p: 3,
        borderRadius: 2,
        minWidth: 300,
        border: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
      }}
    >
      {isDeleting ? (
        <>
          <CircularProgress sx={{ color: "white", mb: 2 }} />
          <Typography sx={{ color: "#ccc" }}>Deleting...</Typography>
        </>
      ) : (
        <>
          <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
            Delete this file?
          </Typography>

          <Typography variant="body2" sx={{ color: "#ccc", mb: 3 }}>
            {`This will delete "window.ad" from the site.`}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button
              onClick={handleClose}
              sx={{
                color: "white",
                textTransform: "none",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={handleDelete}
              variant="contained"
              sx={{
                bgcolor: "#d13438",
                color: "white",
                textTransform: "none",
                "&:hover": { bgcolor: "#a5272b" },
              }}
            >
              Delete
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
}

export default DeleteModal;
