import { IBusList } from "@src/types/bus";
import { JSX } from "react";

import "./styles.scss";

export const Card = ({ start, ended, time, daily }: IBusList): JSX.Element => {
  return (
    <div className="container__card">
      <p>
        {start} - {ended}
      </p>

      <h1>{time}</h1>

      {daily && <p>Diário</p>}
    </div>
  );
};
