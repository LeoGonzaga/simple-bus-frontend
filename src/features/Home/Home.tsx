import { JSX } from "react";
import "./styles.scss";
import Header from "@src/components/Header";
import BusList from "@src/components/BusList";
import Footer from "@src/components/Footer";
import Loader from "@src/components/Loader";
import { useGetBus } from "@src/hooks/useGetBus";

export const Home = (): JSX.Element => {
  const { isLoading } = useGetBus();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="container__home">
      <Header />
      <BusList />
      <Footer />
    </section>
  );
};
