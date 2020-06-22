import React from "react";
import style from "./InfoModal.module.css";

const InfoModal = ({ name, company, status, note, date, phase }) => {
  return (
    <div className={style.infoModal}>
      <h3>{name}</h3>
      <span>{company}</span>
      <span>{`${date.getDay()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`}</span>
      <span>{phase}</span>
      <span>{status}</span>
      <p className={style.note}>{note}</p>
    </div>
  );
};
export default InfoModal;
