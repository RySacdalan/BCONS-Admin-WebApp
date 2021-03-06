import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/centeredmodal.scss";
import { v4 as uuidv4 } from "uuid";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const mapContainerStyle = {
  width: "765px",
  height: "350px",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
//Main modal update form
function LocationModal(props) {
  const { data, reportid } = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

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
                    Live location of: {report.name}.
                  </h3>
                  <p
                    key={uuidv4()}
                    style={{ fontSize: "18px", color: "#ef233c" }}
                  >
                    Note: This map is based on the realtime location of the user
                    when he or she reported the emergency.
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body key={uuidv4()}>
                <div className="location">
                  <div className="location-wrapper">
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      zoom={16}
                      center={{
                        lat: parseFloat(report.latitude),
                        lng: parseFloat(report.longitude),
                      }}
                      options={options}
                    >
                      <Marker
                        position={{
                          lat: parseFloat(report.latitude),
                          lng: parseFloat(report.longitude),
                        }}
                      />
                    </GoogleMap>
                  </div>
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

export default LocationModal;
