import React from "react";
import { Drawer, Box, TextField, Autocomplete, Button } from "@mui/material";
import { useState } from "react";
import { signUpWithEmail, getAuth, editUser } from "../../lib/firebase-config";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DateTime from "../Waiters/DateTime";
import "../../css/admin.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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
    setPosition(newValue.value);
  };
  const turnHandler = (event, newValue) => {
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

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#FFFFFF",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#004668",
      },
    },
  });

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={closeHandler}>
        <Box
          p={5}
          width="400px"
          role="presentation"
          textAlign="center"
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          marginTop={"0"}
          sx={{
            width: 400,
            height: 1000,
          }}
        >
          <section>
            <header>
              <h1>Register new employee</h1>
              <DateTime />
              <p>Admin: {userData.displayName}</p>
            </header>
            <br></br>
            <TextField
              helperText=" "
              id="input-name"
              label= "Name"
              value= {user}
              sx={{
                width: 300,
                marginBottom: 3,
                marginTop: 3,
              }}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              helperText=" "
              id="input-email"
              label="Email"
              value={email}
              sx={{ width: 300, marginBottom: 3 }}
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
                sx={{ width: 300, marginBottom: 3 }}
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
                  sx={{ width: 300, marginLeft: 6, marginBottom: 3 }}
                  helperText=" "
                />
              )}
              onChange={positionHandler}
            />
            <Autocomplete
              id="input-turn"
              options={optionsTurns}
              getOptionLabel={(option) => option.value ?? option}
              isOptionEqualToValue={(option, value) => option.value === value}
              value={turn}
              sx={{ width: 300, marginLeft: 6, marginBottom: 5 }}
              autoComplete={false}
              renderInput={(params) => (
                <TextField {...params} label="Turn" autoComplete="off" />
              )}
              onChange={turnHandler}
            />
          </section>
          <ThemeProvider theme={theme}>
            {isCreateMode && (
              <Button
                variant="contained"
                startIcon={<HowToRegIcon color="secondary" />}
                onClick={resgiterUser}
              >
                Register
              </Button>
            )}
            {!isCreateMode && (
              <Button
                variant="contained"
                startIcon={<HowToRegIcon color="secondary" />}
                onClick={() =>
                  editUser(data.id, user, position, turn, drawerHandler)
                }
              >
                Update
              </Button>
            )}
          </ThemeProvider>
        </Box>
      </Drawer>
    </div>
  );
};

export default AsideRegister;
