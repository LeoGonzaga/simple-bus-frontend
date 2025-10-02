import { JSX } from "react";
import "./styles.scss";

import logo from "@src/shared/icons/bus.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="container__header">
      <div>
        <img src={logo} alt="" />
        <h1>Busão</h1>
      </div>
      <span>Sistema de transporte urbano na cidade de Pedralva.</span>
    </header>
  );
};
