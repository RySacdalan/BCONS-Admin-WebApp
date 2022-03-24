import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "./usertable";
import { toast } from "react-toastify";

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
                    Update account for {user.lastName}, {user.firstName}.
                  </h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-conainer">
                  <form>
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Contact number</label>
                    <input
                      type="text"
                      placeholder="Contact number"
                      onChange={(e) => setContactNumber(e.target.value)}
                    />
                    <label>Street</label>
                    <input
                      type="text"
                      placeholder="Street"
                      onChange={(e) => setStreet(e.target.value)}
                    />
                    <label>Barangay</label>
                    <input
                      type="text"
                      placeholder="Barangay"
                      onChange={(e) => setBrgy(e.target.value)}
                    />
                    <label>Municipality</label>
                    <input
                      type="text"
                      placeholder="Municipality"
                      onChange={(e) => setMunicipality(e.target.value)}
                    />
                    <label>Province</label>
                    <input
                      type="text"
                      placeholder="Province"
                      onChange={(e) => setProvince(e.target.value)}
                    />
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
