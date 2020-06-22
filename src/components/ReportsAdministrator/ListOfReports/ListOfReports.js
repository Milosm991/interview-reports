import React from "react";
import Report from './Report/Report.js'
import { allReports } from '../../../services/reportsService.js'
import style from './ListOfReports.module.css'

class ListOfReports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
    };
  }
  componentDidMount() {
    allReports()
    .then((reports) => {
        this.setState({ reports: reports.data })
    })
  }
 

  render() {
    return <div className={style.wrapper}>
        {this.state.reports.map(report => 
        <Report 
        name={report.candidateName}
        company={report.companyName}
        status={report.status}
        interviewDate={report.interviewDate}
        note={report.note}
        phase={report.phase}/>)}
    </div>;
  }
}
export default ListOfReports;
