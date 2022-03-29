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

  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [brgy, setBrgy] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [province, setProvince] = useState("");

  //Updating user document
  function updateDoc(editUser) {
    if (
      !email ||
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
          window.location.reload(true);
        })
        .catch((err) => {
          toast.error("ERROR: Failed to update user!");
          console.log(err);
        });
    }
  }

  return (
    <div key={uuidv4()}>
      {data.map((user) => {
        if (user.uid == userid) {
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
                    Update account for: {user.lastName}, {user.firstName}.
                  </h3>
                  <p
                    key={uuidv4()}
                    style={{ fontSize: "18px", color: "#ef233c" }}
                  >
                    Note: Update feature is still in beta version. To
                    successfully update an account, all fields must be populated
                    out!
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body key={uuidv4()}>
                <div className="form-container" key={uuidv4()}>
                  <form id="modalForm" key={uuidv4()}>
                    <div className="form-input" key={uuidv4()}>
                      <label>Email</label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Edit email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Contact number</label>
                      <input
                        type="text"
                        id="contactNumber"
                        placeholder="Edit contact number"
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-input" key={uuidv4()}>
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
                    <div className="form-input" key={uuidv4()}>
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
              <Modal.Footer key={uuidv4()}>
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
