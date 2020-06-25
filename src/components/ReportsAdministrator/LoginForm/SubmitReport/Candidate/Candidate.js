import React from "react";
import style from "./Candidate.module.scss";

const Candidate = ({ candidate, getInfoForSubmit }) => (
  <div className={style.container}>
    <div
      className={`${style.wrapper} my-3 p-3`}
      onClick={(event) => getInfoForSubmit(candidate, event.currentTarget)}
    >
      {candidate.avatar !== "" ? (
        <img
          src={candidate.avatar}
          alt="character avatar"
          className={`${style.Candidate__image} col-lg-2`}
        />
      ) : (
        <img
          src={
            "https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg"
          }
          alt="character avatar"
          className={`${style.Candidate__image} col-lg-2`}
        />
      )}
      <div className={`${style.paragraph} col-lg-10`}>
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </div>
  </div>
);

export { Candidate };
