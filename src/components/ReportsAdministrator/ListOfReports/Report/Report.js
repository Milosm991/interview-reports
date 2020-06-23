import React from "react";
import style from "./Report.module.scss";
import InfoModal from "./InfoModal.js";
import { useState } from "react";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import Modal from "react-modal";
import { Container } from "react-bootstrap";

const Report = ({
  name,
  company,
  status,
  interviewDate,
  note,
  phase,
  id,
  removeReport
}) => {
  const date = new Date(interviewDate);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container>
      <div className={`row ${style.aboutReport}`}>
        <div className="col-3">
          <h4>{company}</h4>
          <span>Company</span>
        </div>
        <div className="col-3">
          <h4>{name}</h4>
          <span>Candidate</span>
        </div>
        <div className="col-2">
          <h4>{`${date.getDay()}.${
            date.getMonth() + 1
          }.${date.getFullYear()}`}</h4>
          <span>Interview Date</span>
        </div>
        <div className="col-2">
          <h4>{status}</h4>
          <span>Status</span>
        </div>
        <div className="col-1">
          <AiOutlineEye onClick={() => setModalIsOpen(true)} />
        </div>
        <div className="col-1">
          <AiOutlineClose onClick={() => removeReport(id)} />
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
