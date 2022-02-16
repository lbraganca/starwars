import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const defaultHandleClose = () => document.location.reload();

export default function Alert({
  open,
  handleClose,
  title,
  content,
  type,
  buttonText,
}) {
  type = type ?? "info";
  return (
    <Dialog open={open} onClose={handleClose ?? defaultHandleClose}>
      <DialogTitle color={type}>
        {title ?? [type[0].toUpperCase(), ...type.slice(1)].join("")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose ?? defaultHandleClose} color="primary">
          {buttonText ?? "OK"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
