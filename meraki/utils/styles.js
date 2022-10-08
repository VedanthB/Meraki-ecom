import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // shared
  navbar: {
    backgroundColor: "#0e7490",
    color: "#ecfeff",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2.5rem",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontSize: "1.7rem",
  },
  nav_link_container: {
    display: "flex",
    gap: "0.7rem",
  },
  nav_link: {
    fontSize: "1.5rem",
  },
  nav_btn: {
    fontSize: "1rem",
    backgroundColor: "#0891b2",
    borderRadius: "0.3rem",
    paddingTop: "0.4rem",
    paddingBottom: "0.4rem",
    paddingRight: "0.8rem",
    paddingLeft: "0.8rem",
  },
  grow: {
    flexGrow: 1,
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

  // Not Found
  not_found_container: {
    backgroundColor: "#ecfeff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // home page
  home_page_card: {
    backgroundColor: "#ecfeff",
    color: "#0f172a",
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
    "&:hover": {
      backgroundColor: "#155e75",
    },
  },

  // product details page
  product_details_page_card: {
    backgroundColor: "#ecfeff",
    color: "#0f172a",
    width: "60%",
  },
  product_details_page_back_btn: {
    marginBottom: "1rem",
  },
});
export default useStyles;
