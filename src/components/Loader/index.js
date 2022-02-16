import { Backdrop, CircularProgress } from "@material-ui/core";
import useStyles from "./useStyles";

export default function Loader({ open }) {
  const styles = useStyles();
  return (
    <Backdrop className={styles.root} open={open}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}
