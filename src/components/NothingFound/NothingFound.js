import React from "react";

import { Col } from "react-bootstrap";
import notFound from "./not-found.png";

import style from "./NothingFound.module.scss";

const NothingFound = () => {
  return (
    <Col xs={12} className={`d-flex justify-content-center ${style.wrapper}`}>
      <img src={notFound} alt="nothing found"></img>
    </Col>
  );
};
export { NothingFound };
