import React from "react";
import Report from "./Report/Report.js";
import { allReports } from "../../../services/reportsService.js";
import style from "./ListOfReports.module.scss";
import { APHeader } from "../APHeader/APHeader";

class ListOfReports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      isLinkActive: true,
    };
  }
  componentDidMount() {
    allReports().then((reports) => {
      this.setState({ reports: reports.data });
    });
  }

  removeReport = (id) => {
    const newArray = this.state.reports.filter((report) => report.id !== id);

    this.setState({ reports: newArray });
  };

  onChange = () => {
    this.setState({ isLinkActive: !this.state.isLinkActive });
  };
  render() {
    return (
      <div className={style.wrapper}>
        <APHeader change={this.onChange} isActive={this.state.isLinkActive} />
        {this.state.reports.map((report) => (
          <Report
            key={report.id}
            name={report.candidateName}
            company={report.companyName}
            status={report.status}
            interviewDate={report.interviewDate}
            note={report.note}
            phase={report.phase}
            id={report.id}
            removeReport={this.removeReport}
          />
        ))}
      </div>
    );
  }
}
export default ListOfReports;
