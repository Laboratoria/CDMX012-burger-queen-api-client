import React from "react";
import { Drawer, Box, TextField, Autocomplete, Button } from "@mui/material";
import { useState } from "react";
import {
  signUpWithEmail,
  getAuth,
  editUser,
  getUserById,
} from "../../lib/firebase-config";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DateTime from "../Waiters/DateTime";

const AsideRegister = (props) => {
  const { open, closeHandler, data } = props;
  const [isCreateMode, setIsCreateMode] = useState(!data);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUserName] = useState(data?.displayName || "");
  const [position, setPosition] = useState(data?.rol || "");
  const [turn, setTurn] = useState(data?.turn || "");
  const [email, setEmail] = useState(data?.email || "");
  const [password, setPassword] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const auth = getAuth();
  const userData = auth.currentUser;

  const drawerHandler = () => {
    setIsDrawerOpen(closeHandler);
  };

  const positionHandler = (event, newValue) => {
    console.log(newValue);
    setPosition(newValue.value);
  };
  const turnHandler = (event, newValue) => {
    console.log(newValue);
    setTurn(newValue.value);
  };

  const resgiterUser = (e) => {
    e.preventDefault();
    signUpWithEmail(
      email,
      password,
      user,
      turn,
      position,
      setErrorEmail,
      setErrorPassword,
      drawerHandler
    );
  };

  // const editDataUser = (e) => {
  //   e.preventDefault();
  //   editUser(data.id, user, position, turn,drawerHandler );
  // };

  // useEffect(() => {
  //  getUserById(data.id, setUserName, setPosition, setTurn);
  //   // eslint-disable-next-line
  // }, []);

  console.log(user);
  console.log(email);
  console.log(position);
  console.log(turn);

  const optionsRoles = [
    // { label: "", value: "" },
    { label: "Admin", value: "Admin" },
    { label: "Waiter", value: "Waiter" },
    { label: "Chef", value: "Chef" },
  ];
  const optionsTurns = [
    // { label: "", value: "" },
    { label: "Morning shift", value: "Morning shift" },
    { label: "Afternoon shift", value: "Afternoon shift" },
    { label: "Night shift", value: "Night shift" },
  ];

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={closeHandler}>
        <Box
          p={5}
          width="400px"
          role="presentation"
          textAlign="center"
          sx={{
            backgroundColor: "secondary.main",
            width: 400,
            height: 1000,
          }}
        >
          <header>
            <h1>Register new employee</h1>
            <DateTime />
            <p>Employee: {userData.displayName}</p>
          </header>

          <section>
            <TextField
              helperText=" "
              id="input-name"
              label="Name"
              value={user}
              sx={{ width: 300 }}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              helperText=" "
              id="input-email"
              label="Email"
              value={email}
              sx={{ width: 300 }}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <section className="title-error-sec">
              {errorEmail && <p className="title-error blink">{errorEmail}</p>}
            </section>
            {isCreateMode && (
              <TextField
                helperText=" "
                id="input-password"
                label="Password"
                value={password}
                type={"password"}
                sx={{ width: 300 }}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <section className="title-error-sec">
              {errorPassword && (
                <p className="title-error blink">{errorPassword}</p>
              )}
            </section>
            <Autocomplete
              id="input-rol"
              options={optionsRoles}
              getOptionLabel={(option) => option.value ?? option}
              isOptionEqualToValue={(option, value) => option.value === value}
              value={position}
              sx={{ width: 300 }}
              autoComplete={false}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Role"
                  autoComplete="off"
                  helperText=" "
                />
              )}
              onChange={positionHandler}
            />
            <br></br>
            <Autocomplete
              id="input-turn"
              options={optionsTurns}
              getOptionLabel={(option) => option.value ?? option}
              isOptionEqualToValue={(option, value) => option.value === value}
              value={turn}
              sx={{ width: 300 }}
              autoComplete={false}
              renderInput={(params) => (
                <TextField {...params} label="Turn" autoComplete="off" />
              )}
              onChange={turnHandler}
            />
          </section>
          {isCreateMode && (
            <Button
              variant="contained"
              startIcon={<HowToRegIcon />}
              onClick={resgiterUser}
            >
              Register
            </Button>
          )}
          {!isCreateMode && (
            <Button
              variant="contained"
              startIcon={<HowToRegIcon />}
              onClick={() =>
                editUser(data.id, user, position, turn, drawerHandler)
              }
            >
              Update
            </Button>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default AsideRegister;
