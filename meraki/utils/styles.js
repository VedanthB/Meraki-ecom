import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  // shared
  cursor_pointer: {
    cursor: "pointer",
  },

  // layout
  navbar: {
    backgroundColor: "#0e7490",
    color: "#ecfeff",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    height: "4rem",
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
    marginTop: "0.3rem",
    alignItems: "center",
    gap: "0.8rem",
  },
  nav_link: {
    fontSize: "1.6rem",
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
    position: "relative",
    top: "4rem",
    paddingTop: "1.5rem",
    minHeight: "85vh",
  },
  footer: {
    backgroundColor: "#0e7490",
    height: "3rem",
    marginTop: "6rem",
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
    height: "25.5rem",
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

  // cart page
  cart_page_icon: {
    fontSize: "1.2rem",
    color: "#0e7490",
  },
  cart_details_card: {
    marginLeft: "2rem",
    color: "#0f172a",
    backgroundColor: "#ecfeff",
    height: "11rem",
  },
  cart_details_card_heading: {
    fontSize: "1.3rem",
  },
});
export default useStyles;
