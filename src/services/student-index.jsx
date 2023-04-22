import firestore from "@react-native-firebase/firestore";
import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export default function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const studentCollection = firestore().collection("students");

  const student = []; 
  studentCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((documentSnapshot) => {
      student.push(documentSnapshot.data());
    });

    if (student.length === querySnapshot.size) {
      setStudents(student);
    }
  });

  return (
    <StudentContext.Provider value={{ students }}>
      {children}
    </StudentContext.Provider>
  );
}
