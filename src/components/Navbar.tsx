import React from "react";

import styles from "../dist/css/navbar.module.css";
import Logo from "../assets/img/Icon.png";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul>
        <li>Novidades</li>
        <li>Modelos</li>
        <li>
          <img src={Logo} alt="As Automóveis" />
        </li>
        <li>Contato</li>
        <li>Entrar</li>
      </ul>
    </div>
  );
}
