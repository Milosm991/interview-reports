import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Container } from "react-bootstrap";

import style from "./Report.module.scss";
import Loader from "react-loader-spinner";

import InfoModal from "./InfoModal.js";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";

const Report = ({
  name,
  company,
  status,
  interviewDate,
  note,
  phase,
  id,
  removeReport,
  isLoading,
}) => {
  const date = new Date(interviewDate);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container className={style.container}>
      <div className={`row ${style.aboutReport}`}>
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-6">
          <h4>{company}</h4>
          <span>Company</span>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-6">
          <h4>{name}</h4>
          <span>Candidate</span>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-xs-6">
          <h4>{`${date.getDate()}.${
            date.getMonth() + 1
          }.${date.getFullYear()}`}</h4>
          <span>Interview Date</span>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-4 col-xs-6">
          <h4>{status}</h4>
          <span>Status</span>
        </div>
        <div className="col-xl-1 col-lg-3 col-md-4 col-xs-6">
          <AiOutlineEye onClick={() => setModalIsOpen(true)} />
        </div>
        <div className="col-1">
          {isLoading ? (
            <Loader
              type="Circles"
              color="#000000"
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            <AiOutlineClose onClick={() => removeReport(id)} />
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={style.modal}
      >
        <InfoModal
          name={name}
          company={company}
          status={status}
          date={date}
          note={note}
          phase={phase}
        />
        <button
          onClick={() => setModalIsOpen(false)}
          className={style.modalBtn}
        >
          X
        </button>
      </Modal>
    </Container>
  );
};
export default Report;
