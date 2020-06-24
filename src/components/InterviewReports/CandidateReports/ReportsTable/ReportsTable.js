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
      setModalIsOpen: false,
      date: [],
    };
  }

  componentDidMount() {
    ReportService.fetch(this.props.candidateId).then((report) =>
      this.setState({
        report,
      })
    );
  }

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
                <td id={i}>
                  <AiOutlineEye
                    onClick={() =>
                      this.setState({
                        modalIsOpen: true,
                      })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.modalIsOpen
          ? this.state.report.map((report) => (
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={() =>
                  this.setState({
                    setModalIsOpen: false,
                  })
                }
                className={style.modal}
              >
                <InfoModal
                  name={report.candidateName}
                  company={report.companyName}
                  status={report.status}
                  date={new Date(report.interviewDate)}
                  note={report.Name}
                  phase={report.phase}
                />
                <button
                  onClick={() =>
                    this.setState({
                      setModalIsOpen: false,
                    })
                  }
                  className={style.modalBtn}
                >
                  X
                </button>
              </Modal>
            ))
          : null}
      </>
    );
  }
}

export { ReportsTable };
