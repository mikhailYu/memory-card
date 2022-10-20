import React from "react";
import "../../styles/Footer.css";

function Footer() {
  return (
    <div id="footerCont">
      <p>
        Created by:
        <a
          className="gitLink"
          href="https://github.com/mikhailYu"
          target={"_blank"}
        >
          Mikhail Y.
        </a>
      </p>
    </div>
  );
}

export default Footer;
