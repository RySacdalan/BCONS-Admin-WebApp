import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "../pages/users/usertable";
import { toast } from "react-toastify";
import "../styles/centeredmodal.scss";

//Main modal update form
function MyVerticallyCenteredModal(props) {
  const { data, userid } = props;
  console.log(userid);

  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [brgy, setBrgy] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [province, setProvince] = useState("");

  //Updating user document
  function updateDoc(editUser) {
    if (
      email ||
      contactNumber ||
      street ||
      brgy ||
      municipality ||
      province === ""
    ) {
      toast.error("ERROR: Atleast one field must be edited! Try again.");
    } else {
      ref
        .doc(editUser.id)
        .update(editUser)
        .then(() => {
          toast.success("Updated Successfully!");
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
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h3>
                    Update account for: {user.lastName}, {user.firstName}.
                  </h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-container">
                  <form>
                    <div className="form-input">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="Edit email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Contact number</label>
                      <input
                        type="text"
                        placeholder="Edit contact number"
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label>Street</label>
                      <input
                        type="text"
                        placeholder="Edit street"
                        onChange={(e) => setStreet(e.target.value)}
                      />
                      <label>Barangay</label>
                      <input
                        type="text"
                        placeholder="Edit barangay"
                        onChange={(e) => setBrgy(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label>Municipality</label>
                      <input
                        type="text"
                        placeholder="Edit municipality"
                        onChange={(e) => setMunicipality(e.target.value)}
                      />
                      <label>Province</label>
                      <input
                        type="text"
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
                      email: email,
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
