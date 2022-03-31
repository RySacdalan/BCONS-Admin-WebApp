import React, { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { createContext } from "react";

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [nearbyReports, setNearbyReports] = useState([]);

  //For all user reports
  const getUserReports = async () => {
    const db = getFirestore();
    const colRef = collection(db, "User Reports");
    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setReports(data);
  };

  useEffect(() => {
    getUserReports();
  }, []);

  // //For all user nearby reports
  const getNearbyReports = async () => {
    const db = getFirestore();
    const colRef = collection(db, "User's Nearby Report");
    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setNearbyReports(data);
  };

  useEffect(() => {
    getNearbyReports();
  }, []);

  const reportValue = {
    reports,
    nearbyReports,
  };

  return (
    <ReportContext.Provider value={reportValue}>
      {children}
    </ReportContext.Provider>
  );
};
