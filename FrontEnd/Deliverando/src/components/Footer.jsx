import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <ul className="footer">

      <li>
        <a href="https://github.com/BarbaraPapa" target="_blank">
          <img src="pubblic/github.png" alt="github logo" />
          Barbara Papa
        </a>
      </li>

      <li>
        <a href="https://github.com/SureLife" target="_blank">
        <img src="pubblic/github.png" alt="github logo" />
          Daniel Lavin
        </a>
      </li>

      <li>
        <a href="https://github.com/LLDieg" target="_blank">
        <img src="pubblic/github.png" alt="github logo" />
          Diego LLerena
        </a>
      </li>

    </ul>
  );
}

export default Footer;
