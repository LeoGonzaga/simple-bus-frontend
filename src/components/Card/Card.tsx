import { IBusList } from "@src/types/bus";
import { JSX } from "react";

import "./styles.scss";

export const Card = ({ start, ended, time }: IBusList): JSX.Element => {
  return (
    <div className="container__card">
      {start} - {ended} {time}
    </div>
  );
};
