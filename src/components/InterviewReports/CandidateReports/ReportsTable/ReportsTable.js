import React from "react";
import { ReportService } from "../../../../services/ReportService";

class ReportsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: [],
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
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Interview Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.report.map((report) => (
              <tr>
                <td>{report.companyName}</td>
                <td>{report.interviewDate}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export { ReportsTable };
