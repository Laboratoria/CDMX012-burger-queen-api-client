import React from "react";
import {
  db,
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "../../lib/firebase-config";
import { useState, useEffect } from "react";
import TableEmployess from "./TableEmployess";

const ContentTableEmployess = () => {
  const [employee, setEmployee] = useState([]);
  const employees = collection(db, "profile");

  useEffect(() => {
    const q = query(employees, orderBy("displayName", "desc"), limit(20));
    onSnapshot(q, (snapshot) => {
      const employeeArray = [];
      snapshot.forEach((doc) => {
        employeeArray.push({ ...doc.data(), id: doc.id });
      });
      setEmployee(employeeArray);
    });
  }, []);

  return (
    <section className="table-container">
      <table style={{ border: "none", borderRadius: "20px", padding: "10px" }}>
        <thead>
          <tr>
            <th style={{ width: "180px", padding: "10px" }}>Name</th>
            <th style={{ width: "80px", padding: "10px" }}>Role</th>
            <th style={{ width: "180px", padding: "10px" }}>E-mail</th>
            <th style={{ width: "180px", padding: "10px" }}>Turn</th>
            <th style={{ width: "180px", padding: "10px" }}>Edit</th>
            <th style={{ width: "180px", padding: "10px" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <TableEmployess
              key={employee.uid}
              displayName={employee.displayName}
              rol={employee.rol.value}
              email={employee.email}
              turn={employee.turn.value}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ContentTableEmployess;
