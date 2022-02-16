import { createTheme } from "@material-ui/core";
import { lightBlue, yellow } from "@material-ui/core/colors";

export default createTheme({
  palette: {
    type: "dark",
    primary: yellow,
    secondary: lightBlue,
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
