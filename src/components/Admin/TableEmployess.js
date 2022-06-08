import React from "react";
import {
  db,
  collection,
  onSnapshot,
  
} from "../../lib/firebase-config";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const TableEmployess = () => {
  const [employee, setEmployee] = useState([]);
  const employees = collection(db, "profile");

  useEffect(() => {
    onSnapshot(employees, (snapshot) => {
      const employeeArray = [];
      snapshot.forEach((doc) => {
        employeeArray.push({ ...doc.data(), id: doc.id });
      });
      setEmployee(employeeArray);
    });
  }, []);

  return (
    <div>
      <table style={{ border: "none", borderRadius: "20px", padding: "10px" }}>
        <tr>
          <th style={{ width: "180px", padding: "10px" }}>Name</th>
          <th style={{ width: "80px", padding: "10px" }}>Role</th>
          <th style={{ width: "180px", padding: "10px" }}>E-mail</th>
          <th style={{ width: "180px", padding: "10px" }}>Turn</th>
          <th style={{ width: "180px", padding: "10px" }}>Edit</th>
          <th style={{ width: "180px", padding: "10px" }}>Delete</th>
        </tr>

        {employee.map((user) => (
          <tr>
            <td style={{ width: "180px", padding: "5px 10px" }}>
              {user.displayName}
            </td>
            <td style={{ width: "130px", padding: "5px 10px" }}>
              {user.rol.value}
            </td>
            <td style={{ width: "180px", padding: "5px 10px" }}>
              {" "}
              {user.email}{" "}
            </td>
            <td style={{ width: "180px", padding: "5px 10px" }}>
              {" "}
              {user.turn.value}{" "}
            </td>
            <td>
              <IconButton aria-label="delete">
                <ModeEditOutlineIcon />
              </IconButton>
            </td>
            <td><IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableEmployess;
