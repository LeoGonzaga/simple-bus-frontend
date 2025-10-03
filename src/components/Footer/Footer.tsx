import { JSX } from "react";
import "./styles.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className="container__footer">
      <span>Desenvolvido por </span>
      <a href="https://www.linkedin.com/in/leogonzaga/" target="_blank">
        Leo Gonzaga
      </a>
    </footer>
  );
};
