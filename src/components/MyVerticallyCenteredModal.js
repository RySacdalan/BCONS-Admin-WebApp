import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
} from "firebase/database";

const initialState = {
  email: "",
  number: "",
  lastname: "",
  firstname: "",
};

//Main modal update form
function MyVerticallyCenteredModal(props) {
  const [userDoc, setUserDoc] = useState(initialState);
  const [data, setData] = useState({});

  const { email, number, lastname, firstname } = userDoc;

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserDoc({ ...userDoc, [name]: value });
  };

  //function for updating the docs
  const updateDoc = () => {
    toast.success("Updating...");
  };

  //Modal pop-up form
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update user data.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Edit email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="number">MobileNumber</label>
        <input
          type="number"
          placeholder="Edit number"
          name="number"
          id="number"
          onChange={handleInputChange}
          value={number}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Edit lastname"
          name="lastname"
          id="lastname"
          onChange={handleInputChange}
          value={lastname}
        />
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          placeholder="Edit firstname"
          name="firstname"
          id="firstname"
          onChange={handleInputChange}
          value={firstname}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={updateDoc}
          id="updateButton"
          style={{ backgroundColor: "#07bc0c", border: "none" }}
        >
          Save update
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
