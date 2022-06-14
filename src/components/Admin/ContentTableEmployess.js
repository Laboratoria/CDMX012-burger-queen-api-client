import React from "react";
import {
  getData
} from "../../lib/firebase-config";
import { useState, useEffect } from "react";
import TableEmployess from "./TableEmployess";

const ContentTableEmployess = () => {
  const [employee, setEmployee] = useState([]);
  

  useEffect(() => {
    getData(setEmployee)
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
        
          
          {employee.map((employee) => (
            <TableEmployess
              key={employee.uid}
              displayName={employee.displayName}
              rol={employee.rol}
              email={employee.email}
              turn={employee.turn}
              id={employee.id}
            />
          ))}
      </table>
    </section>
  );
};

export default ContentTableEmployess;
