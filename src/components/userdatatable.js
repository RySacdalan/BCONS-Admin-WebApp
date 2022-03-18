import React, { useState, useEffect } from "react";
import "../styles/userdatatable.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Userdatatable = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [alldocs, setAllDocs] = useState([]);
  const [updata, setUpdata] = useState({});
  const [search, setSearch] = useState("");

  //Getting all data of users
  const getAllData = async () => {
    const db = getFirestore();
    const colRef = collection(db, "Users");
    const querySnapshot = await getDocs(colRef);
    querySnapshot.docs.forEach((doc) => {
      setAllDocs((prev) => {
        return [...prev, { data: doc.data(), id: doc.id }];
      });
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  //the modal update form
  function MyVerticallyCenteredModal(props) {
    const { userdata } = props;

    const [value, setValue] = useState({
      useremail: userdata.email,
      usernumber: userdata.contactNumber,
      userlastname: userdata.lastName,
      userfirstname: userdata.firstName,
    });

    const { useremail, usernumber, userlastname, userfirstname } = value;

    const handleChange = (name = (e) => {
      e.preventDefault();
      setValue({ ...value, [name]: e.target.value });
    });

    //function for updating the docs
    const updateDoc = () => {
      toast.success("Updating...");
    };

    //jsx for modal pop up
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
          <input
            type="email"
            placeholder="Edit email"
            name="email"
            onChange={() => {
              handleChange("email");
            }}
            value={useremail}
          />
          <input
            type="text"
            placeholder="Edit number"
            name="number"
            onChange={() => {
              handleChange("number");
            }}
            value={usernumber}
          />
          <input
            type="text"
            placeholder="Edit lastname"
            name="lastname"
            onChange={() => {
              handleChange("lastname");
            }}
            value={userlastname}
          />
          <input
            type="text"
            placeholder="Edit firstname"
            name="firstname"
            onChange={() => {
              handleChange("firstname");
            }}
            value={userfirstname}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={updateDoc}
            style={{ backgroundColor: "#07bc0c", border: "none" }}
          >
            Save update
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  //jxs for the user's table
  return (
    <div className="table-wrapper">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <ion-icon name="search"></ion-icon>
      </div>
      <div className="table-container">
        <table>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            userdata={updata}
          />
          <thead>
            <tr>
              <th>Image</th>
              <th>Lastname</th>
              <th>Firstname</th>
              <th>Middle Initial</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Birthday</th>
              <th>Street</th>
              <th>Barangay</th>
              <th>Municipality</th>
              <th>Province</th>
              <th>Id</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {alldocs
              .filter(
                (user) =>
                  //Possible search keywords
                  user.data.lastName.toLowerCase().includes(search) ||
                  user.data.firstName.toLowerCase().includes(search) ||
                  user.data.email.toLowerCase().includes(search) ||
                  user.data.contactNumber.toLowerCase().includes(search) ||
                  user.data.brgy.toLowerCase().includes(search) ||
                  user.data.municipality.toLowerCase().includes(search)
              )
              .map((doc) => (
                <tr>
                  <td>
                    <img src={doc.data.image} alt="Profile Image" />
                  </td>
                  <td>{doc.data.lastName}</td>
                  <td>{doc.data.firstName}</td>
                  <td>{doc.data.middleInitial}</td>
                  <td>{doc.data.gender}</td>
                  <td>{doc.data.email}</td>
                  <td>{doc.data.contactNumber}</td>
                  <td>{doc.data.birthday}</td>
                  <td>{doc.data.street}</td>
                  <td>{doc.data.brgy}</td>
                  <td>{doc.data.municipality}</td>
                  <td>{doc.data.province}</td>
                  <td>{doc.data.uid}</td>
                  <td>
                    <div className="control-wrapper">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setUpdata(doc.data);
                          setModalShow(true);
                        }}
                      >
                        <ion-icon name="create"></ion-icon>
                      </button>
                      <button className="delete-btn">
                        <ion-icon name="trash"></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userdatatable;
