import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Candidate.module.scss";

const Candidate = ({ id, avatar, name, email }) => {
  return (
    <Col xl={4} lg={4} md={6} xs={12}>
      <div className={`card text-center mt-4 ${style.card}`}>
        <Link to={`/candidate_info/${id}`} className="my-auto">
          <img
            src={
              avatar === ""
                ? "https://image.noelshack.com/fichiers/2016/05/1454853726-16013-w600-1.jpg"
                : avatar
            }
            className={`card-img-top ${style.avatar}`}
            alt="Candidate painting"
          />
        </Link>
        <div className={`card-body ${style.body}`}>
          <h5 className="card-title">{name}</h5>
          <span>{email}</span>
        </div>
      </div>
    </Col>
  );
};

Candidate.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

Candidate.defaultProps = {
  avatar:
    "https://image.noelshack.com/fichiers/2016/05/1454853726-16013-w600-1.jpg",
  name: "Name Surname",
  email: "Name.Surname@email.com",
};

export { Candidate };
