import { useGetBus } from "@src/hooks/useGetBus";
import { JSX } from "react";
import Card from "../Card";

import "./styles.scss";

export const BusList = (): JSX.Element => {
  const { data } = useGetBus();

  return (
    <main className="container__bus-list">
      {data.map((bus, index) => (
        <Card {...bus} key={index} />
      ))}
    </main>
  );
};
