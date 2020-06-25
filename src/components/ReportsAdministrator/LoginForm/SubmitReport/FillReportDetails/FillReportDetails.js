import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import style from "./FillReportDetails.module.scss";

class FillReportDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { interviewData: null };
  }

  render() {
    return (
      <Row>
        <div
          className={`${style.typeOfAction} col-lg-2 border-right border-dark`}
        >
          <p className={`${style.paragraph} `} id="1">
            1.Select Candidate
          </p>
          <p className={`${style.paragraph}`} id="2">
            2. Select Company{" "}
          </p>
          <p className={`${style.paragraph} font-weight-bold`}>
            <span className={style.span}>3.</span> Fill Report Details
          </p>

          <div className={`${style.candidates} col-10`}></div>
          <div className="mt-4">
            <p className={style.candidate}>Candidate:</p>
            <span className={style.candidate_name}>
              {this.props.candidateName}
            </span>
            <p className={style.candidate}>Company:</p>
            <span className={style.company_name}>{this.props.companyName}</span>
          </div>
        </div>
        <Col xs={10}>
          <Row>
            <Col xs={4}>
              <div className={style.interviewDate}>
                <span>InterviewData:</span>
                <input
                  type="date"
                  onChange={(event) =>
                    this.props.getDetailsInfo(event, event.currentTarget)
                  }
                />
              </div>
            </Col>
            <Col xs={4}>
              <div className={style.phase}>
                <span>Phase: </span>
                <select
                  onChange={(event) =>
                    this.props.getDetailsInfo(event, event.currentTarget)
                  }
                >
                  <option>cv</option>
                  <option>hr</option>
                  <option>tech</option>
                  <option>final</option>
                </select>
              </div>
            </Col>
            <Col xs={4}>
              <div className={style.status}>
                <span>Status:</span>
                <select
                  required
                  onChange={(event) =>
                    this.props.getDetailsInfo(event, event.currentTarget)
                  }
                  defaultValue="Select...."
                >
                  <option>Select</option>
                  <option>Passed</option>
                  <option>Declined</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <span>Notes: </span>
              <textarea
                type="text"
                className={`col-12 ${style.notes}`}
                onChange={(event) =>
                  this.props.getDetailsInfo(event, event.currentTarget)
                }
              ></textarea>
            </Col>
          </Row>
          <div className={style.butons}>
            <Button onClick={this.props.prev}>Back</Button>
            <Button onClick={this.props.submit}>Submit</Button>
          </div>
        </Col>
      </Row>
    );
  }
}
export { FillReportDetails };
