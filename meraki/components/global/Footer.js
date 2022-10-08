import React from "react";
import { useStyles } from "../../utils";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <a
        href="https://github.com/Ananyamadhu08"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://twitter.com/AnanyaMadhu27"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.linkedin.com/in/ananya-madhu-74479b206/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
