import React from "react";
import style from "./InfoModal.module.scss";
import { Card, Row, Col } from "react-bootstrap";

const InfoModal = ({ name, company, status, note, date, phase }) => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className={style.infoModal}>
            <h2>{name}</h2>
            <Row>
              <Col xs={6}>
                <Card className={style.infoCard} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{company}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Company
                    </Card.Subtitle>
                    <Card.Title>{`${date.getDay()}.${
                      date.getMonth() + 1
                    }.${date.getFullYear()}`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Interview Date
                    </Card.Subtitle>
                    <Card.Title>{phase}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Phase
                    </Card.Subtitle>
                    <Card.Title>{status}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Status
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card className={style.infoCard} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Text>{note}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default InfoModal;
