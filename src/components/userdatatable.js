import React, { useState, useEffect } from "react";
import "../styles/userdatatable.scss";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const Userdatatable = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [alldocs, setAllDocs] = useState([]);
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

  //Deleting documents
  const onDelete = (id) => {
    if (
      window.confirm(
        "Deleting this user will delete all his/her account and history of reports. Are you sure you want to delete this account permanently?"
      )
    ) {
      const db = getFirestore();
      const docRef = doc(db, "Users", id);
      deleteDoc(docRef)
        .then(() => {
          toast.success("Deleted Successfully!");
          history.push("/");
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

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
              .map((doc, id) => (
                <tr key={id}>
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
                      <Link to={`/users/${doc.data.uid}`}>
                        <button
                          className="edit-btn"
                          onClick={() => {
                            //setUpdata(doc.data);
                            setModalShow(true);
                          }}
                        >
                          <ion-icon name="create"></ion-icon>
                        </button>
                      </Link>
                      <button
                        className="delete-btn"
                        onClick={() => onDelete((id = doc.data.uid))}
                      >
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
