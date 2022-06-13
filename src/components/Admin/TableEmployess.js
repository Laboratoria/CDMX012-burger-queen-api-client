import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AsideRegister from "./AsideRegister";
import { deleteUser,getAuth} from "../../lib/firebase-config";
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
      <tbody>
        <tr>
          <td style={{ width: "180px", padding: "5px 10px" }}>{displayName}</td>
          <td style={{ width: "130px", padding: "5px 10px" }}>{rol}</td>
          <td style={{ width: "180px", padding: "5px 10px" }}> {email} </td>
          <td style={{ width: "180px", padding: "5px 10px" }}> {turn} </td>
          <td style={{ width: "180px", padding: "10px" }}>
            <IconButton aria-label="edit" onClick={drawerHandler}>
              <ModeEditOutlineIcon />
            </IconButton>
          </td>
          <td style={{ width: "180px", padding: "10px" }}>
            <IconButton
              aria-label="delete"
              onClick={() => confirmDelete(id, userData.displayName)}
            >
              <DeleteIcon />
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
      deleteUser(id);
    }
  });
};
