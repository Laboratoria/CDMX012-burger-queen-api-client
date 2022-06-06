import React from "react";
import { useNavigate } from "react-router";
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
import {
  createUserWithEmailAndPassword,
  auth,
  updateProfile,
  logOut,
} from "../../lib/firebase-config";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const AsideRegister = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const signUpWithEmail =(e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsDrawerOpen(false);
        updateProfile(auth.currentUser, {
          email: email,
          password: password,
          photoURL: "https://random.imagecdn.app/300/300",
          displayName: user,
        });

        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        //const errorMessage = error.message;
        if (error.code === "auth/invalid-email") {
          console.log(error.code);
          setErrorEmail("Invalid email");
        } else if (error.code === "auth/email-already-in-use") {
          console.log(error.code);
          setErrorEmail("Email already in use");
        } else if (error.code === "auth/wrong-password") {
          console.log(error.code);
          setErrorPassword("Invalid password");
        } else if (error.code === "auth/weak-password") {
          console.log(error.code);
          setErrorPassword(" Password should be at least 6 characters ");
        }
      });
      setIsDrawerOpen(false)

  };

  const optionsRoles = [
    { label: "Admin", id: 1 },
    { label: "Waiter", id: 2 },
    { label: "Chef", id: 2 },
  ];
  const optionsTurns = [
    { label: "Morning shift", id: 1 },
    { label: "Afternoon shift", id: 2 },
    { label: "Night shift", id: 2 },
  ];

  return (
    <div>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section>
          <PersonAddAltRoundedIcon id="shopping" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
      <h1>Hola</h1>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={5}
          width="400px"
          role="presentation"
          textAlign="center"
          sx={{
            backgroundColor: "primary.dark",
            width: 400,
            height: 1000,
          }}
        >
          <header>
            <h1>Register new employee</h1>
          </header>

          <section>
            <TextField
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="Name"
              sx={{ width: 300 }}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
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
              id="demo-helper-text-aligned-no-helper"
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
              disablePortal
              id="combo-box-demo"
              options={optionsRoles}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Role" />}
              autoComplete="off"
              onChange={(e) => setPosition(e.target.value)}
            />
            <br></br>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={optionsTurns}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Turn" />}
              autoComplete="off"
            />
          </section>
          <Button
            variant="contained"
            startIcon={<HowToRegIcon />}
            onClick={signUpWithEmail}
          >
            Register
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default AsideRegister;
