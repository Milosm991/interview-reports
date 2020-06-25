import React from "react";
import Report from "./Report/Report.js";

import { allReports } from "../../../services/reportsService.js";
import { APHeader } from "../APHeader/APHeader";
import { SearchBar } from "../../SearchBar/SearchBar.js";
import { Container, Row } from "react-bootstrap";
import { NothingFound } from "../../NothingFound/NothingFound.js";
import { removeReportFromServer } from "../../../services/AuthService";
import { isLoggedIn } from "../../../services/AuthService";
import style from "./ListOfReports.module.scss";

class ListOfReports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      filteredReports: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    allReports().then((reports) => {
      this.setState({ reports: reports.data, filteredReports: reports.data });
    });
  }

  removeReport = (id, target) => {
    removeReportFromServer(id).then((res) =>
      allReports().then((reports) => {
        this.setState({
          reports: reports.data,
          filteredReports: reports.data,
          isLoading: !this.state.isLoading,
        });
      })
    );
  };

  inputValue = (value) => {
    let filteredArray = this.state.reports.filter((item) => {
      if (
        item.companyName.toLowerCase().includes(value.toLowerCase()) ||
        item.candidateName.toLowerCase().includes(value.toLowerCase())
      ) {
        return true;
      }
      return null;
    });
    this.setState({ filteredReports: filteredArray });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      // console.log(prevState.isLoading);
      // this.setState({ isLoading: false });
      this.setState({ isLoading: false });
    }
  }
  render() {
    const areYouAdmin = isLoggedIn();
    if (!areYouAdmin) {
      this.props.history.push("/admin");
    }
    return (
      <div className={style.wrapper}>
        <APHeader />
        <Container>
          <Row>
            <SearchBar getInputValue={this.inputValue} />
          </Row>
          <Row>
            {this.state.filteredReports.length ? (
              this.state.filteredReports.map((report) => (
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
              ))
            ) : (
              <NothingFound />
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
export { ListOfReports };
