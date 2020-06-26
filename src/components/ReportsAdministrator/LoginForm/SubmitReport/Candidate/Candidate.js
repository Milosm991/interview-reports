import React from "react";
import style from "./Candidate.module.scss";

const Candidate = ({ candidate, getInfoForSubmit }) => (
  <div className={`${style.container} `}>
    <div
      className={`${style.wrapper} my-3 p-3`}
      onClick={(event) => getInfoForSubmit(candidate, event.currentTarget)}
    >
      {candidate.avatar !== "" ? (
        <img
          src={candidate.avatar}
          alt="character avatar"
          className={`${style.Candidate__image} col-lg-2 col-12`}
        />
      ) : (
        <img
          src={
            "https://image.noelshack.com/fichiers/2016/05/1454853726-16013-w600-1.jpg"
          }
          alt="character avatar"
          className={`${style.Candidate__image} col-lg-2 col-12`}
        />
      )}
      <div className={`${style.paragraph} col-lg-10 col-xl-12 col-xs-12 `}>
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </div>
  </div>
);

export { Candidate };
