import React, { useState } from "react";
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import PlanetIcon from "@material-ui/icons/Language";
import PeopleIcon from "@material-ui/icons/People";
import useStyles from "./useStyles";

export default function Layout({ children }) {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography color="primary" className={styles.welcome}>
        Star Wars Database
      </Typography>
      <div className={styles.page}>{children}</div>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={styles.bottomNavigation}
        showLabels
      >
        <BottomNavigationAction
          component={Link}
          to="/planets"
          label="Planets"
          value="/planets"
          icon={<PlanetIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/people"
          label="People"
          value="/people"
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
