import React, { useState, useEffect } from "react";
import MyCircularProgress from "../../widgets/MyCircularProgress";
import { useAuth } from "../../../context/AuthContext";
import CloseIcon from "@material-ui/icons/Close";
import {
  IconButton,
  TextField,
  Snackbar,
  AppBar,
  Typography,
  makeStyles,
  Toolbar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const menuStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ContributeComponent() {
  const classes = useStyles();
  const menuClasses = menuStyles();

  const { user, loading } = useAuth();
  const [values, setValues] = useState({
    name: "",
    email: "",
    stream: "",
    career: "",
    title: "",
    link: "",
    imageUrl: "",
  });
  const [resource, setResource] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  //   useEffect(() => {
  //     if (error !== "") {
  //       setSnackbarMessage(error);
  //       setOpenSnackbar(true);
  //     }
  //   }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbarMessage("");
    if (values.name.trim() === "") {
      setSnackbarMessage("Enter your name");
      setOpenSnackbar(true);
      return;
    }
    if (values.email.trim() === "") {
      setSnackbarMessage("Enter your email");
      setOpenSnackbar(true);
      return;
    }
    if (values.stream.trim() === "") {
      setSnackbarMessage("Enter stream");
      setOpenSnackbar(true);
      return;
    }
    if (values.career.trim() === "") {
      setSnackbarMessage("Enter career");
      setOpenSnackbar(true);
      return;
    }
    if (resource === "") {
        setSnackbarMessage("Select resource");
        setOpenSnackbar(true);
        return;
      }
    if (values.title.trim() === "") {
      setSnackbarMessage("Enter resource title");
      setOpenSnackbar(true);
      return;
    }
    if (values.link.trim() === "") {
      setSnackbarMessage("Enter resource link");
      setOpenSnackbar(true);
      return;
    }

  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar
          elevation={0}
          style={{ backgroundColor: "white" }}
          position="fixed"
        >
          <Toolbar>
            <Typography
              style={{ color: "#3e4853" }}
              className={classes.title}
              variant="h6"
            >
              Contribute
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="h-10"></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col  items-center SM:p-8 w-screen  ">
          <div className="mt-4 shadow-sm m-2 p-4">
            <form onSubmit={handleSubmit} noValidate autoComplete="on">
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter your name"
                fullWidth={true}
                value={values.name}
                id="name"
                size="medium"
                type="text"
                name="name"
                onChange={(e) =>
                  setValues({ ...values, ["name"]: e.target.value })
                }
              />
              <p className="text-xs text-custom-grey-shade py-1">
                We will notify you when your resource is uploaded through your
                email.
              </p>
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter your email"
                fullWidth={true}
                id="email"
                size="medium"
                type="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, ["email"]: e.target.value })
                }
              />
              &nbsp;
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter stream (eg. Engineering)"
                fullWidth={true}
                id="stream"
                size="medium"
                type="text"
                value={values.stream}
                onChange={(e) =>
                  setValues({ ...values, ["stream"]: e.target.value })
                }
              />
              &nbsp;
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter career (eg. App Developer)"
                fullWidth={true}
                id="career"
                size="medium"
                type="text"
                value={values.career}
                onChange={(e) =>
                  setValues({ ...values, ["career"]: e.target.value })
                }
              />
              <select
                onChange={(e) => setResource(e.target.value)}
                name="cars"
                id="cars"
                className="w-full bg-white border my-4 py-4 rounded-md border-gray-400 pl-2 text-custom-black"
              >
                <option value="">Select Resource</option>
                <option value="Book/Document">Book/Document</option>
                <option value="Vedio">Vedio</option>
                <option value="Course">Course</option>
                <option value="Article">Article</option>
              </select>
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter resource title"
                fullWidth={true}
                id="title"
                size="medium"
                type="text"
                value={values.title}
                onChange={(e) =>
                  setValues({ ...values, ["title"]: e.target.value })
                }
              />
              <p className="text-xs text-custom-grey-shade py-1">
                Please provide the link to the resource. You can upload into
                your cloud (google drive) and share the link or directly provide
                the source link.
              </p>
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter resource link"
                fullWidth={true}
                id="link"
                size="medium"
                type="text"
                value={values.link}
                onChange={(e) =>
                  setValues({ ...values, ["link"]: e.target.value })
                }
              />
              <p className="text-xs text-custom-grey-shade py-1">
                It there is an image of resource, please provide the url of
                image.(Optional)
              </p>
              <TextField
                className="mt-10"
                variant="outlined"
                label="Enter image url"
                fullWidth={true}
                id="image-url"
                size="medium"
                type="text"
                value={values.imageUrl}
                onChange={(e) =>
                  setValues({ ...values, ["imageUrl"]: e.target.value })
                }
              />
              {/* <FormControl
                variant="outlined"
                className={menuClasses.formControl}
                fullWidth={true}
              >
                <InputLabel id="resource-id">Select Resource</InputLabel>
                <Select
                  labelId="resource-id"
                  id="resource-id-new"
                  value={resource}
                  onChange={(e) => setResource(e.target.value)}
                  label="Select Resource"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Book/Document"}>Book/Document</MenuItem>
                  <MenuItem value={"Vedio"}>Vedio</MenuItem>
                  <MenuItem value={"Course"}>Course</MenuItem>
                  <MenuItem value={"Article"}>Article</MenuItem>
                </Select>
              </FormControl> */}
              <p className="text-xs text-custom-grey-shade pt-4">
                You are making a change with your confirmation. It will help
                students, teachers and who ever need of this resource. Thank you
                for your contribution and your valuable time.
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
                  Submit
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
    </div>
  );
}
