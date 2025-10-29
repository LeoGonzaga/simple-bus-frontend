import { JSX } from "react";
import "./styles.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className="container__footer">
      <p>Notou alguma informação incorreta? </p>
      <p>Entre em contato comigo!</p>

      <div className="gap"></div>

      <span>@2025 by </span>
      <a href="https://www.linkedin.com/in/leogonzaga/" target="_blank">
        Leo Gonzaga
      </a>
    </footer>
  );
};
