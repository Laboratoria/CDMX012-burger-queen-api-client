import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const TableEmployess = (props) => {
  const { displayName, rol, email, turn } = props;

  return (
    <>
      <tr>
        <td style={{ width: "180px", padding: "5px 10px" }}>{displayName}</td>
        <td style={{ width: "130px", padding: "5px 10px" }}>{rol}</td>
        <td style={{ width: "180px", padding: "5px 10px" }}> {email} </td>
        <td style={{ width: "180px", padding: "5px 10px" }}> {turn} </td>
        <td style={{ width: "180px", padding: "10px" }}>
          <IconButton aria-label="delete">
            <ModeEditOutlineIcon />
          </IconButton>
        </td>
        <td style={{ width: "180px", padding: "10px" }}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>
      {/* </table> */}
    </>
  );
};

export default TableEmployess;
