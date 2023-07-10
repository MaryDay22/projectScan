import React from "react";
import css from "./HistogramResult.module.css";

export const HistogramResult = ({ period, all, risk }) => {
  return (
    <li className={css.result}>
      <div>{period}</div>
      <div>{all}</div>
      <div>{risk}</div>
    </li>
  );
};
