import { Typography } from "@material-ui/core";
import React from "react";
import DetailCard from "../DetailCard";
import useStyles from "./useStyles";

export default function Person({
  person: {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
  },
}) {
  const styles = useStyles();
  return (
    <DetailCard title={name}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Birth year:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {birth_year}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Eye color:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {eye_color}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Gender:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {gender}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Hair color:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {hair_color}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Height:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {`${height} cm`}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Mass:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {`${mass} Kg`}
          </Typography>
        </div>
        <div className={styles.box}>
          <Typography className={styles.key} color="textSecondary">
            Skin color:
          </Typography>
          <Typography className={styles.value} gutterBottom>
            {skin_color}
          </Typography>
        </div>
      </div>
    </DetailCard>
  );
}
