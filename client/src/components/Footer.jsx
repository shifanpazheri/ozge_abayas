// eslint-disable-next-line
import React from "react";

function Footer() {
  //need to add instagram favicon
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div class="footer">
      <span>
        <a
          className="link_color"
          href="https://www.instagram.com/ozge_abayas/?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <i class="fab fa-instagram copyright-icon"></i>
        </a>
      </span>
      <br />Ⓒ Copyright {year} OZGE ABAYAS
      <p>
        Made with ❤ by{" "}
        <a
          className="link_color"
          href="https://www.linkedin.com/in/muhammedshifanpazheri"
          target="_blank"
        >
          Muhammed Shifan P
        </a>
      </p>
    </div>
  );
}

export default Footer;
