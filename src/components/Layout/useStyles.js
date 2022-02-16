import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      background: "#333",
    },
    welcome: {
      fontSize: "30pt",
      textAlign: "center",
      padding: theme.spacing(3),
    },
    page: {
      padding: theme.spacing(3),
      flexGrow: 1,
      paddingBottom: theme.spacing(9),
    },
    bottomNavigation: {
      position: "fixed",
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      zIndex: 2,
    },
  };
});
