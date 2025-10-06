import { JSX } from "react";
import "./styles.scss";

export const Header = (): JSX.Element => {
  return (
    <header className="container__header">
      <h1>Horário de ônibus</h1>
      <span>Atualizado em: 01/10/2025</span>
    </header>
  );
};
