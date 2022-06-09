import React from "react";
import {
  Drawer,
  Box,
  TextField,
  Autocomplete,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

import { signUpWithEmail, getAuth } from "../../lib/firebase-config";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DateTime from "../DateTime";

const AsideRegister = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [turn, setTurn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const auth = getAuth();
  const userData = auth.currentUser;

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
      setIsDrawerOpen
    );
  };
  // const signUpWithEmail = (e) => {
  //   e.preventDefault();
  //   setErrorEmail("");
  //   setErrorPassword("");
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       setIsDrawerOpen(false);
  //       updateProfile(auth.currentUser, {
  //         email: email,
  //         password: password,
  //         photoURL: "https://random.imagecdn.app/300/300",
  //         displayName: user,
  //       });
  //       saveData(position, user, turn);
  //       console.log(position, user, turn);
  //       setIsDrawerOpen(false);
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       //const errorMessage = error.message;
  //       if (error.code === "auth/invalid-email") {
  //         console.log(error.code);
  //         setErrorEmail("Invalid email");
  //       } else if (error.code === "auth/email-already-in-use") {
  //         console.log(error.code);
  //         setErrorEmail("Email already in use");
  //       } else if (error.code === "auth/wrong-password") {
  //         console.log(error.code);
  //         setErrorPassword("Invalid password");
  //       } else if (error.code === "auth/weak-password") {
  //         console.log(error.code);
  //         setErrorPassword(" Password should be at least 6 characters ");
  //       }
  //     });
  // };

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

  const drawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setEmail("");
    setTurn("");
    setPosition("");
  };

  return (
    <div>
      <IconButton
        onClick={drawerHandler}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section>
          <PersonAddAltRoundedIcon id="shopping" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={drawerHandler}>
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
              sx={{ width: 300 }}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              helperText=" "
              id="input-email"
              label="Email"
              sx={{ width: 300 }}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <section className="title-error-sec">
              {errorEmail && <p className="title-error blink">{errorEmail}</p>}
            </section>
            <TextField
              helperText=" "
              id="input-password"
              label="Password"
              type={"password"}
              sx={{ width: 300 }}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
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
          <Button
            variant="contained"
            startIcon={<HowToRegIcon />}
            onClick={resgiterUser}
          >
            Register
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default AsideRegister;
