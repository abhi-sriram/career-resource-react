import React, { useState, useEffect } from "react";
import MyCircularProgress from "../widgets/MyCircularProgress";
import { useAuth } from "../../context/AuthContext";
import CloseIcon from "@material-ui/icons/Close";

import {
  
  IconButton,
  TextField,
  Snackbar,
} from "@material-ui/core";

export default function ForgotPassword() {
  const { resetPassword, error, loading } = useAuth();

  const [email, setEmail] = useState("");
  
  const [snackbarMessage, setSnackbarMessage] = useState("");
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
    resetPassword(email);
    // login(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" SM:shadow-sm SM:border SM:rounded-md flex flex-col  items-center p-8 sm:w-full w-2/5  ">
        <div className="flex justify-center flex-col items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fforgot-password.png?alt=media&token=cdefb397-7ab4-494d-a042-bb4a6ebfc846"
            }
            className="w-36 h-36"
            alt="Login.jpg"
          />
          <p className="text-custom-black text-xl font-bold my-2">Password Reset</p>
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
            

            {loading ? (
              <div className="w-full flex justify-center mx-2">
                <MyCircularProgress />
              </div>
            ) : (
              <button
                type="submit"
                className="bg-red-500 h-12 w-full mt-4 mb-2 rounded-sm text-white font-semibold hover:text-red-500  hover:bg-white "
              >
                Send Password Reset
              </button>
            )}

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
