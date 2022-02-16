import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  };
});
