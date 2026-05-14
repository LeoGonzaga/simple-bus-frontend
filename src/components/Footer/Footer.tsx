import { JSX } from "react";
import "./styles.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className="container__footer">
      <p>Notou alguma informação incorreta? </p>
      <p>Entre em contato com a gente!</p>

      <div className="gap"></div>

      <span>
        @{new Date().getFullYear()} Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/leogonzaga/" target="_blank">
          Leo Gonzaga
        </a>
        e{" "}
        <a href="https://www.linkedin.com/in/carlosgonzaga11/" target="_blank">
          Carlos Alberto
        </a>
      </span>
    </footer>
  );
};
