import React from "react";
import Modal from "react-modal";
import style from "./ReportsTable.module.scss";

import { AiOutlineEye } from "react-icons/ai";
import { ReportService } from "../../../../services/ReportService";

import InfoModal from "../../../ReportsAdministrator/ListOfReports/Report/InfoModal";

class ReportsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: [],
      modalIsOpen: false,
      modalContent: null,
    };
  }

  componentDidMount() {
    ReportService.fetch(this.props.candidateId).then((report) =>
      this.setState({
        report,
      })
    );
  }

  getMeMyModal = (e) => {
    const id = e.currentTarget.id;
    const report = this.state.report[id];
    this.setState({ modalContent: report });
  };

  render() {
    return (
      <>
        <h1>Reports</h1>
        <table className="table table-striped p-5 my-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Interview Date</th>
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.report.map((report, i) => (
              <tr key={i}>
                <td>{report.companyName}</td>
                <td>{report.interviewDate}</td>
                <td>{report.status}</td>

                <td key={i}>
                  <AiOutlineEye
                    id={i}
                    onClick={(event) => {
                      this.getMeMyModal(event);
                      this.setState({
                        modalIsOpen: true,
                      });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.modalContent && (
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.setState({ modalIsOpen: false })}
            className={style.modal}
            ariaHideApp={false}
          >
            <InfoModal
              name={this.state.modalContent.candidateName}
              company={this.state.modalContent.companyName}
              status={this.state.modalContent.status}
              date={new Date(this.state.modalContent.interviewDate)}
              note={this.state.modalContent.note}
              phase={this.state.modalContent.phase}
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
        )}
      </>
    );
  }
}

export { ReportsTable };
