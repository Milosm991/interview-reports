import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Container } from "react-bootstrap";

import style from "./Report.module.scss";
import Loader from "react-loader-spinner";

import InfoModal from "./InfoModal.js";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      isLoading: null,
      modalIsOpen: false,
    };
  }

  date = new Date(this.props.interviewDate);

  render() {
    return (
      <Container className={style.container}>
        <div className={`row ${style.aboutReport}`}>
          <div className="col-xl-3 col-lg-3 col-md-3 col-xs-6">
            <h4>{this.props.company}</h4>
            <span>Company</span>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-xs-6">
            <h4>{this.props.name}</h4>
            <span>Candidate</span>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-xs-6">
            <h4>{`${this.date.getDate()}.${
              this.date.getMonth() + 1
            }.${this.date.getFullYear()}`}</h4>
            <span>Interview Date</span>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-xs-6">
            <h4>{this.props.status}</h4>
            <span>Status</span>
          </div>
          <div className="col-xl-1 col-lg-3 col-md-4 col-xs-6">
            <AiOutlineEye
              onClick={() =>
                this.setState({
                  modalIsOpen: true,
                })
              }
            />
          </div>
          <div className="col-1">
            {this.state.isLoading ? (
              <Loader
                type="Circles"
                color="#000000"
                height={100}
                width={100}
                timeout={3000}
              />
            ) : (
              <AiOutlineClose
                onClick={() => {
                  this.props.removeReport(this.props.id);
                }}
              />
            )}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() =>
            this.setState({
              modalIsOpen: false,
            })
          }
          className={style.modal}
        >
          <InfoModal
            name={this.props.name}
            company={this.props.company}
            status={this.props.status}
            date={this.props.date}
            note={this.props.note}
            phase={this.props.phase}
          />
          <button
            onClick={() =>
              this.setState({
                modalIsOpen: false,
              })
            }
            className={style.modalBtn}
          >
            X
          </button>
        </Modal>
      </Container>
    );
  }
}
export default Report;
