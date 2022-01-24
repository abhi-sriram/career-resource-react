import React,{  useState,useEffect } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MyCircularProgress from "../widgets/MyCircularProgress";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CloseIcon from "@material-ui/icons/Close";

import {
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  Snackbar,
} from "@material-ui/core";

export default function Login() {
  const { login,error,loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  useEffect(() => {
    if (error !== "") {
      setSnackbarMessage(error);
      setOpenSnackbar(true);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbarMessage("");
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setSnackbarMessage("Invalid email");
      setOpenSnackbar(true);

      return;
    }
    if (password.length === 0) {
      setSnackbarMessage("Enter password");
      setOpenSnackbar(true);

      return;
    }
    login(email.trim(),password.trim())
    // login(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" SM:shadow-sm SM:border SM:rounded-md flex flex-col  items-center p-8 sm:w-full w-2/5  ">
        <div className="flex justify-center flex-col items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Flog-in.png?alt=media&token=45f21154-4c9f-4233-9161-b05e7b51155d"
            }
            className="w-36 h-36"
            alt='Login.jpg'
          />
          <p className="text-center mt-2 text-custom-black text-xl font-bold">Welcome Back!</p>
          <p className="mb-2 text-custom-black">We are so excited to see you again!</p>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit} noValidate autoComplete="on">
            <TextField
              className="mt-10"
              variant="outlined"
              label="Email"
              fullWidth={true}
              id="email"
              size="medium"
              type="email"
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <span>&nbsp;</span>
            <FormControl fullWidth={true} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={passwordVisibility ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordVisibility(!passwordVisibility)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {!passwordVisibility ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            {loading ? (
              <div className="w-full flex justify-center my-2">
                <MyCircularProgress />
              </div>
            ) : (
              <button
                type="submit"
                className="bg-custom-green h-12 w-full mt-6 mb-2 rounded-sm text-white font-semibold hover:text-custom-green hover:border hover:bg-white hover:border-custom-green"
              >
                Login
              </button>
            )}

            <p className="w-full text-center text-custom-blue">
              <Link to="/forgot-password">Forgot Password</Link>
            </p>
            <p className="w-full  text-custom-blue">
              <Link to="/intro">&lt; back</Link>
            </p>

            {/* {error !== "" ? (
              <p className="text-red-500 text-center w-full font-semibold text-lg">
                {error}
              </p>
            ) : null}
            {snackbarMessage !== "" ? (
              <p className="text-red-500 text-center w-full font-semibold text-lg">
                {snackbarMessage}
              </p>
            ) : null} */}
          </form>
          
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={4000}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                setOpenSnackbar(false);
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
