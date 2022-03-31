import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "../pages/users/usertable";
import { toast } from "react-toastify";
import "../styles/centeredmodal.scss";
import { v4 as uuidv4 } from "uuid";

//Main modal update form
function MyVerticallyCenteredModal(props) {
  const { data, userid } = props;
  console.log(userid);

  
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [brgy, setBrgy] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [province, setProvince] = useState("");

  //Updating user document
  function updateDoc(editUser) {
    if (
      !contactNumber ||
      !street ||
      !brgy ||
      !municipality ||
      !province
    ) {
      toast.error("ERROR: All fields are required! Try again.");
    } else {
      ref
        .doc(editUser.id)
        .update(editUser)
        .then(() => {
          toast.success("User Updated Successfully!");
          setTimeout(() => {
            window.location.reload(true);
          }, 3000);
        })
        .catch((err) => {
          toast.error("ERROR: Failed to update user!");
          console.log(err);
        });
    }
  }

  return (
    <div>
      {data.map((user) => {
        if (user.uid == userid) {
          return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h3 style={{ fontSize: "28px" }}>
                    Update account for: {user.lastName}, {user.firstName}.
                  </h3>
                  <p style={{ fontSize: "18px", color: "#ef233c" }}>
                    Note: Update feature is still in beta version. To
                    successfully update an account, all fields must be populated
                    out!
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-container">
                  <form id="modalForm">
                    <div className="form-input">
                      <label>Contact number</label>
                      <input
                        type="text"
                        id="contactNumber"
                        placeholder="Edit contact number"
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label>Street</label>
                      <input
                        type="text"
                        id="street"
                        placeholder="Edit street"
                        onChange={(e) => setStreet(e.target.value)}
                      />
                      <label>Barangay</label>
                      <input
                        type="text"
                        id="barangay"
                        placeholder="Edit barangay"
                        onChange={(e) => setBrgy(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label>Municipality</label>
                      <input
                        type="text"
                        id="municipality"
                        placeholder="Edit municipality"
                        onChange={(e) => setMunicipality(e.target.value)}
                      />
                      <label>Province</label>
                      <input
                        type="text"
                        id="province"
                        placeholder="Edit province"
                        onChange={(e) => setProvince(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{ backgroundColor: "#07bc0c", border: "none" }}
                  onClick={() => {
                    updateDoc({
                      contactNumber: contactNumber,
                      street: street,
                      brgy: brgy,
                      municipality: municipality,
                      province: province,
                      id: user.uid,
                    });
                  }}
                >
                  Save update
                </Button>
                <Button onClick={props.onHide}>Cancel</Button>
              </Modal.Footer>
            </Modal>
          );
        }
      })}
    </div>
  );
}

export default MyVerticallyCenteredModal;
