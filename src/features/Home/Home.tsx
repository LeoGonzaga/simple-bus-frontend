import { JSX } from "react";
import "./styles.scss";
import Header from "@src/components/Header";
import BusList from "@src/components/BusList";

export const Home = (): JSX.Element => {
  return (
    <section className="container__home">
      <Header />
      <BusList />
    </section>
  );
};
