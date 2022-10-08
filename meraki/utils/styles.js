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
    marginTop: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "#ecfeff",
    gap: "1.5rem",
  },

  // home page
  home_page_card: {
    backgroundColor: "#ecfeff",
    width: "18rem",
    height: "26rem",
  },
  home_page_card_img: {
    width: "100%",
    height: "15rem",
    objectFit: "fill",
  },
  home_page__card_details: {
    textAlign: "center",
  },
  home_page_btn_container: {
    display: "flex",
    justifyContent: "center",
  },
  home_page_card_btn: {
    backgroundColor: "#0e7490",
    color: "#ecfeff",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
    paddingRight: "1rem",
    paddingLeft: "1rem",
  },
});
export default useStyles;
