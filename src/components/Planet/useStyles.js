import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    key: {
      fontSize: 14,
    },
    value: {
      fontSize: 16,
    },
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    box: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      minWidth: `calc(33% - ${theme.spacing(4)}px)`,
    },
  };
});
