import { useParams } from "react-router";
import textUppercase from "../../widgets/textUppercaseFunction";
import { Toolbar, Typography, makeStyles, AppBar } from "@material-ui/core";
import { ArrowForwardIosRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));
export default function MultipleQuizComponent() {
  const { branch } = useParams();

  const classes = useStyles();

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
              {textUppercase(branch)}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="h-14"></div>
      <div className="m-4 rounded-lg shadow-sm border border-gray-100">
        {[
          "bio technologist",
          "chemical engineer",
          "color technologist",
          "energy engineer",
          "nuclear engineer",
          "petroleum engineer",
        ].map((ele, index) => (
          <Link key={ele} to={"/activity/"+branch+"/"+ele}>
            <div className="flex flex-row justify-between px-3 py-5 hover:bg-gray-50">
              <div className="flex-1">
                <p className="pl-2 text-custom-black ">{textUppercase(ele)}</p>
              </div>
              <div>
                <ArrowForwardIosRounded
                  fontSize={"small"}
                  style={{ color: "#3e4853" }}
                />
              </div>
            </div>
            {index !== 5 ? (
              <div className="w-full h-px bg-gray-200"></div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
