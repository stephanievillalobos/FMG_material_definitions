import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    "& > * > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function Types() {
  const classes = useStyles(theme);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3c97d8"
      },
      secondary: {
        main: "#4fb466"
      }
    },
    overrides: {
      MuiButton: {
        root: {
          padding: "8px 16px"
        },
        containedSecondary: {
          color: "white"
        }
      }
    },
    typography: {
      fontFamily: "Montserrat, Arial",
      h4: {
        fontSize: 15,
        color: "#333",
        fontWeight: 600
      },
      body1: {
        fontFamily: "Muli",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "1.5"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
        <div>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div>
          <Button variant="outline">Default</Button>
          <Button variant="outline" color="primary">
            Primary
          </Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button variant="outline" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" size="small">
            Small
          </Button>
          <Button variant="contained" color="primary" size="medium">
            Medium
          </Button>
          <Button variant="contained" color="primary" size="large">
            Large
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
