/* eslint-disable */
import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase.config";
import LocationModal from "./locationModal";
import ImageModal from "./imageModal";
import "../styles/historydatatable.scss";
import jsPDF from "jspdf";
import "jspdf-autotable";

//data reference
const ref = firebase.firestore().collection("User Reports");
console.log(ref);

const Historydatatable = () => {
  const [reportHistory, setReportHistory] = useState([]);
  const [reportId, setReportId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [search, setSearch] = useState("");

  //Getting all data of reports
  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReportHistory(items);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  //downloading pdf file
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("History Report Table", 20, 10);

    doc.autoTable({
      head: [
        [
          "Reported By",
          "Report Type",
          "Date Reported",
          "Time Reported",
          "Date Solved",
          "Time Solved",
        ],
      ],
      body: reportHistory.map((report) => {
        return [
          [report.name],
          [report.emergencyTypeOfReport],
          [report.date],
          [report.time],
          [report.date],
          [report.time],
          [report.dateSolved],
          [report.timeSolved],
        ];
      }),
    });

    doc.save("report.pdf");
  };

  return (
    <div className="report-container">
      <div className="table-wrapper">
        <div className="data-control">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search here..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <ion-icon name="search"></ion-icon>
          </div>
          <div className="print-history" onClick={() => downloadPdf()}>
            <ion-icon name="print-outline"></ion-icon>
          </div>
        </div>
        <div className="history-list-container">
          <ImageModal
            show={imageShow}
            onHide={() => setImageShow(false)}
            data={reportHistory}
            reportid={reportId}
          />
          <div className="report-list-container">
            <LocationModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              data={reportHistory}
              reportid={reportId}
            />

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Reported By</th>
                    <th>Type of Report</th>
                    <th>Date Reported</th>
                    <th>Time Reported</th>
                    <th>Date Solved</th>
                    <th>Time Solved</th>
                    <th>View Image or Location </th>
                  </tr>
                </thead>
                <tbody>
                  {reportHistory
                    .filter(
                      (history) =>
                        // search keywords available
                        history.date.toLowerCase().includes(search) ||
                        history.emergencyTypeOfReport
                          .toLowerCase()
                          .includes(search) ||
                        history.time.toLowerCase().includes(search) ||
                        history.name.toLowerCase().includes(search)
                    )
                    .map((history) => {
                      if (history.status === "Solved") {
                        return (
                          <tr key={history.id}>
                            <td>{history.name}</td>
                            <td>{history.emergencyTypeOfReport}</td>
                            <td>{history.date}</td>
                            <td>{history.time}</td>
                            <td>{history.dateSolved}</td>
                            <td>{history.timeSolved}</td>
                            <td>
                              <div className="control-wrapper">
                                <button
                                  className="edit-btn"
                                  onClick={() => {
                                    setImageShow(true);
                                    setReportId(history.reportId);
                                  }}
                                >
                                  <ion-icon name="image"></ion-icon>
                                </button>
                                <button
                                  className="history-location-btn"
                                  onClick={() => {
                                    setModalShow(true);
                                    setReportId(history.reportId);
                                  }}
                                >
                                  <div className="history-btn-wrapper">
                                    <ion-icon name="location-sharp"></ion-icon>
                                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default Historydatatable;
