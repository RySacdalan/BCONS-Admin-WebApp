import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
//import "../users/usertable.scss";
=======
>>>>>>> Stashed changes
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

const Historydatatable = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [alldocs, setAllDocs] = useState([]);
  const [search, setSearch] = useState("");
  console.log(alldocs.data);
  //Getting all data of users
  const getAllData = async () => {
    const db = getFirestore();
    const colRef = collection(db, "User Reports");
    const querySnapshot = await getDocs(colRef);
    querySnapshot.docs.forEach((doc) => {
      setAllDocs((prev) => {
        return [...prev, { data: doc.data(), id: doc.id }];
      });
    });
  };

  useEffect(() => {
    getAllData();
    //console.log(doc.data.id);
    //console.log(user.data.name);
  }, []);

  //Deleting documents
  const onDelete = (id) => {
    if (
      window.confirm(
        "Deleting this user will delete all his/her account and history of reports. Are you sure you want to delete this account permanently?"
      )
    ) {
      const db = getFirestore();
      const docRef = doc(db, "User Reports", id);
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
              <th>Name</th>
              <th>Address</th>
              <th>Type of Emergency</th>
              <th>Description</th>
              <th>Age</th>
              <th>Location</th>
              <th>Email</th>
              <th>Sex</th>
              <th>Date and time</th>
              <th>Report Status</th>
            </tr>
          </thead>
          <tbody>
            {alldocs
              .filter(
                (user) =>
                  //Possible search keywords

                  user.data.name.toLowerCase().includes(search) ||
                  user.data.address.toLowerCase().includes(search) ||
                  user.data.email.toLowerCase().includes(search) ||
                  user.data.description.toLowerCase().includes(search)
              )
              .map((doc, id) => {
                if (doc.data.solvedOrUnsolved == "solved") {
                  return (
                    <tr key={id}>
                      <td>
                        <img src={doc.data.image} alt="Profile Image" />
                      </td>
                      <td>{doc.data.name}</td>
                      <td>{doc.data.address}</td>
                      <td>{doc.data.emergencyTypeOfReport}</td>
                      <td>{doc.data.description}</td>
                      <td>{doc.data.age}</td>
                      <td>{doc.data.location}</td>
                      <td>{doc.data.email}</td>
                      <td>{doc.data.sex}</td>
                      <td>{doc.data.dateAndTime}</td>
                      <td>{doc.data.solvedOrUnsolved}</td>
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
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historydatatable;
