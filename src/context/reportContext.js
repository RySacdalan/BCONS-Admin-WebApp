import React, { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { createContext } from "react";

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  //All reports
  const getReports = async () => {
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
    getReports();
  }, []);

  const reportValue = {
    reports,
  };

  return (
    <ReportContext.Provider value={reportValue}>
      {children}
    </ReportContext.Provider>
  );
};
