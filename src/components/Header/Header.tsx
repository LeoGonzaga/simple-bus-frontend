import { JSX } from "react";
import "./styles.scss";

import { useGetBus } from "@src/hooks/useGetBus";

export const Header = (): JSX.Element => {
  const { updatedAt } = useGetBus();

  return (
    <header className="container__header">
      <h1>Horário de ônibus</h1>
      <span>
        Atualizado em: <strong>{updatedAt}</strong>
      </span>
    </header>
  );
};
