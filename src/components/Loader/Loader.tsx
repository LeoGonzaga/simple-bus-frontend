import { JSX } from "react";
import "./styles.scss";

export const Loader = (): JSX.Element => {
  return (
    <div className="container__loader">
      <div className="skeleton skeleton-text skeleton-text--medium"></div>
      <div className="skeleton skeleton-text skeleton-text--medium"></div>
      <div className="skeleton skeleton-text skeleton-text--medium"></div>
      <div className="skeleton skeleton-text skeleton-text--medium"></div>
      <div className="skeleton skeleton-text skeleton-text--medium"></div>
    </div>
  );
};
