import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // shared
  navbar: {
    backgroundColor: "#0e7490",
    color: "#ecfeff",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "85vh",
  },
  footer: {
    backgroundColor: "#0e7490",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "#ecfeff",
    gap: "1.5rem",
  },
});
export default useStyles;
