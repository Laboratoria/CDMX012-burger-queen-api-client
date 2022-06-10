import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AsideRegister from "./AsideRegister";

const TableEmployess = (props) => {
  const { displayName, rol, email, turn } = props;
  const [showEditMode, setShowEditMode] = useState(false);
  const drawerHandler = () => {
    setShowEditMode(!showEditMode);
  };

  return (
    <>
      {showEditMode && (
        <AsideRegister
          open={showEditMode}
          closeHandler={drawerHandler}
          data={props}
        />
      )}
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
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>
     
    </>
  );
};

export default TableEmployess;
