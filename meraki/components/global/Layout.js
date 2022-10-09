import React from "react";
import Head from "next/head";
import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

export default function Layout({ children }) {
  const classes = useStyles();

  const { state } = useStore();
  const { darkMode } = state;

  const lightTheme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "light",
      background: {
        default: "#ffffff",
      },
      primary: {
        main: "#0e7490",
      },
      secondary: {
        main: "#155e75",
      },
    },
  });

  const darkTheme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "dark",
      background: {
        default: "#0f172a",
      },
      primary: {
        main: "#0e7490",
      },
      secondary: {
        main: "#155e75",
      },
    },
  });

  return (
    <div>
      <Head>
        <title>Meraki</title>
        <meta name="description" content="An ecommerce application" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />

        <Navbar />

        <Container className={classes.main}>{children}</Container>

        <Footer />
      </ThemeProvider>
    </div>
  );
}
