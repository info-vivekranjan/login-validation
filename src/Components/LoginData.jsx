import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./LoginData.module.css";

const LoginData = () => {
  const [showEmailValid, setShowEmailValid] = useState(false);
  const [showPasswordValid, setshowPasswordValid] = useState(false);
  const [showEmailRequired, setShowEmailRequired] = useState(false);
  const [showPasswordRequired, setshowPasswordRequired] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var emailValidity =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //for any kind of email

  const handleSubmit = () => {
    if (email.trim() === "") {
      console.log("Email required");
      setShowEmailRequired(true);
    } else if (email.trim() !== "") {
      setShowEmailRequired(false);
    }
    if (password.trim() === "") {
      console.log("Password Required");
      setshowPasswordRequired(true);
    } else if (password.trim() !== "") {
      setshowPasswordRequired(false);
    }

    if (
      emailValidity.test(email) &&
      password.length >= 8 &&
      password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g)
    ) {
      console.log(email, password);
      setShowEmailValid(false);
      setshowPasswordValid(false);
    } else if (emailValidity.test(email)) {
      console.log("Invalid Password");
      setshowPasswordValid(true);
      setShowEmailValid(false);
    } else if (password.length >= 4) {
      console.log("Invalid Email");
      setshowPasswordValid(false);
      setShowEmailValid(true);
    } else {
      setshowPasswordValid(true);
      setShowEmailValid(true);
      console.log("Invalid Email");
      console.log("Invalid Password");
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ec3266",
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        style={{
          height: "100vh",
          backgroundColor: "rgb(233, 233, 233)",
          paddingTop: "14vh",
        }}
      >
        <Box id={styles.loginContBox}>
          <Box style={{ textAlign: "center" }}>
            <img
              src="https://pbs.twimg.com/profile_images/1374364833009725450/pKzduPIW.jpg"
              alt="Myntra"
              style={{ width: "90px" }}
            />
          </Box>
          <Box style={{ textAlign: "center", marginTop: "15px" }}>
            <Typography variant="h4" gutterBottom component="div">
              Login to your account
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                width: "60%",
              },
            }}
            autoComplete="off"
            style={{ textAlign: "center", marginTop: "45px" }}
          >
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              style={{ textAlign: "left", paddingLeft: "20%" }}
            >
              Email
            </Typography>

            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="email"
                InputLabelProps={{ shrink: false }}
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ThemeProvider>
            {showEmailRequired ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Email Required
              </Typography>
            ) : showEmailValid ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Invalid Email
              </Typography>
            ) : null}
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",
                paddingLeft: "20%",
                marginTop: "35px",
              }}
            >
              Password
            </Typography>
            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="password"
                InputLabelProps={{ shrink: false }}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ThemeProvider>
            {showPasswordRequired ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Password Required
              </Typography>
            ) : showPasswordValid ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  paddingLeft: "20%",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                Invalid Password
              </Typography>
            ) : null}
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{
                  height: "57px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  mt: "20px",
                }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginData;
