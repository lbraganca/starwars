import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    root: {
      background: "#111",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    title: {
      fontWeight: "bold",
      fontSize: 14,
      textAlign: "center",
      width: "100%",
      padding: theme.spacing(2),
    },
    childrenContainer: {
      padding: theme.spacing(2),
    },
  };
});
