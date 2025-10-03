import { IBusList } from "@src/types/bus";
import { JSX } from "react";

import "./styles.scss";

import busIcon from "@src/shared/icons/bus.svg";
import roadDashedIcon from "@src/shared/icons/road-dashed.svg";
import pinMapIcon from "@src/shared/icons/map-pin.svg";

export const Card = ({
  start,
  ended,
  time,
  daily,
  companyName,
  mondayToFriday,
  mondayToSaturday,
  sundyAndHolidays,
}: IBusList): JSX.Element => {
  const handleShowRecorrencyDays = () => {
    switch (true) {
      case daily:
        return "Diário";
      case mondayToFriday:
        return "Segunda à Sexta";
      case mondayToSaturday:
        return "Segunda à Sábado";
      case sundyAndHolidays:
        return "Domingos e Feriados";
      default:
        return "-";
    }
  };

  const weekDays = handleShowRecorrencyDays();

  return (
    <div className="container__card">
      <p className="container__card__company_name">{companyName}</p>
      <div className="container__card__cities">
        <h1>{start}</h1>
        <img src={roadDashedIcon} alt="" className="container__card__road" />
        <div className="container__card__cities__ended">
          <img src={pinMapIcon} />
          <h1>{ended}</h1>
        </div>
      </div>

      <p className="container__card__week_days">{weekDays}</p>

      <div className="container__card__time">
        <img src={busIcon} alt="" />
        <h1>{time}</h1>
      </div>
    </div>
  );
};
