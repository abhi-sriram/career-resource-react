import React, { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MyCircularProgress from "../widgets/MyCircularProgress";
import { useAuth } from "../../context/AuthContext";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import {
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  Snackbar,
} from "@material-ui/core";

export default function Signup() {
  const { signup, error, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords don't match");
      setOpenSnackbar(true);

      return;
    }
    signup(email.trim(), password.trim());
    // login(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" SM:shadow-sm SM:border SM:rounded-md flex flex-col  items-center p-8 sm:w-full w-2/5  ">
        <div className="flex justify-center flex-col items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fsign-up.png?alt=media&token=3008d8b4-13f4-4ce1-bf44-cfa18a0e8c1f"
            }
            className="w-36 h-36"
            alt="Login.jpg"
          />
          <p className="text-custom-black text-xl font-bold my-2">REGISTER</p>
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

            <span>&nbsp;</span>
            <FormControl fullWidth={true} variant="outlined">
              <InputLabel htmlFor="confirm password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirm password"
                type={passwordVisibility ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

            <p className="text-custom-grey-shade text-sm my-2">
              A verification email will be sent to this{" "}
              <span className="text-custom-black font-semibold">{email}</span>.
            </p>

            {loading ? (
              <div className="w-full flex justify-center mb-2">
                <MyCircularProgress />
              </div>
            ) : (
              <button
                type="submit"
                className="bg-custom-blue h-12 w-full mt-4 mb-2 rounded-sm text-white font-semibold hover:text-custom-blue  hover:bg-white hover:border-custom-blue"
              >
                Register
              </button>
            )}
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
