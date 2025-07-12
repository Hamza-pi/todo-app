import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import type { AddTaskProps } from "../types";

const AddTask = ({ open, setOpen }: AddTaskProps) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent sx={{ width: "30rem" }}>
          <DialogContentText>Enter details of the new Task</DialogContentText>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "1rem",
              padding: "1.5rem",
            }}
          >
            <TextField
              autoFocus
              required
              id="name"
              name="ttle"
              label="Title"
              type="text"
              fullWidth
            />
            <TextField
              id="description"
              name="Description"
              label="Description"
              type="text"
              fullWidth
            />
            <DialogActions>
              <Button type="submit">Submit</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTask;
