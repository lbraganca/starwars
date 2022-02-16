import { Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";

export default function DetailCard({ title, children }) {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Typography className={styles.title} color="primary" variant="h3">
        {title}
      </Typography>
      <div className={styles.childrenContainer}>{children}</div>
    </Paper>
  );
}
