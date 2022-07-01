import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AsideRegister from "./AsideRegister";
import {  deleteUsers, getAuth } from "../../lib/firebase-config";
import { grey } from "@mui/material/colors";
import Swal from "sweetalert2";

const TableEmployess = (props) => {
  const { displayName, rol, email, turn, id } = props;
  const [showEditMode, setShowEditMode] = useState(false);
  const auth = getAuth();
  const userData = auth.currentUser;

  const drawerHandler = () => {
    setShowEditMode(!showEditMode);
  };

  return (
    <>
      <tbody >
        <tr displayName="content-table">
          <td className="input-table-big" >{displayName}</td>
          <td className="input-table-medium">{rol}</td>
          <td className="input-table-medium" > {email} </td>
          <td className="input-table-small" > {turn} </td>
          <td className="input-table-small" >
            <IconButton aria-label="edit" onClick={drawerHandler}>
              <ModeEditOutlineIcon sx={{ color: grey[900] }}/>
            </IconButton>
          </td>
          <td className="input-table-small" >
            <IconButton
              aria-label="delete"
              onClick={() => confirmDelete(id, userData.displayName)}
            >
              <DeleteIcon sx={{ color: grey[900] }} />
            </IconButton>
          </td>
        </tr>
      </tbody>

      {showEditMode && (
        <AsideRegister
          open={showEditMode}
          closeHandler={drawerHandler}
          data={props}
        />
      )}
    </>
  );
};

export default TableEmployess;

const confirmDelete = (id, name) => {
  Swal.fire({
    title: `Hi ${name}, Are you sure?`,
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#006494",
    cancelButtonColor: "#DE1344",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      //llamamos a la fcion para eliminar
      deleteUsers(id);
    }
  });
};
