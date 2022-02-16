import { Typography } from "@material-ui/core";
import React from "react";
import DetailCard from "../DetailCard";
import useStyles from "./useStyles";

export default function Planet({
  planet: {
    name,
    population,
    terrain,
    diameter,
    rotation_period,
    orbital_period,
    gravity,
    climate,
  },
}) {
  const styles = useStyles();
  return (
    <DetailCard title={name}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Population:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {population}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Terrain:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {terrain}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Diameter:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {`${diameter} km`}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Climate:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {climate}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Rotation period:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {`${rotation_period} h`}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Orbital period:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {`${orbital_period} days`}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Gravity:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {`${gravity} G  `}
          </Typography>
        </div>
      </div>
    </DetailCard>
  );
}
