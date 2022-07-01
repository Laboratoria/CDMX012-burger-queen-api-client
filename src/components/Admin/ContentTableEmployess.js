import React from "react";
import { getData } from "../../lib/firebase-config";
import { useState, useEffect } from "react";
import TableEmployess from "./TableEmployess";

const ContentTableEmployess = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getData(setEmployee);
  }, []);

  return (
    <section>
      <table className="table-container-Employees" border="1" rules="rows">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>E-mail</th>
            <th>Turn</th>
            <th>Edit</th>
            <th>Delete</th>
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
