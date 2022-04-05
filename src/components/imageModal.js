/* eslint-disable */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/centeredmodal.scss";
import { v4 as uuidv4 } from "uuid";

//Main modal update form
function ImageModal(props) {
  const { data, reportid } = props;
  return (
    <div key={uuidv4()}>
      {data.map((report) => {
        if (report.reportId == reportid) {
          return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              key={uuidv4()}
            >
              <Modal.Header key={uuidv4()}>
                <Modal.Title id="contained-modal-title-vcenter" key={uuidv4()}>
                  <h3 key={uuidv4()} style={{ fontSize: "28px" }}>
                    Reported Image of: {report.name}.
                  </h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body key={uuidv4()}>
                <div
                  className="report-image"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={report.image} alt="Report Image" />
                </div>
              </Modal.Body>
              <Modal.Footer key={uuidv4()}>
                <Button onClick={props.onHide}>Back</Button>
              </Modal.Footer>
            </Modal>
          );
        }
      })}
    </div>
  );
}

export default ImageModal;
