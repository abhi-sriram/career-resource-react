import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import HomeComponent from "./home/HomeComponent";
import BranchComponent from "./home/BranchComponent";
import CareerComponent from "./home/CareerComponent";
import MultipleQuizComponent from "./home/Tests/MultipleQuizComponent";
import QuizComponent from "./home/Tests/QuizComponent";
import QuizReviewComponent from "./home/Tests/QuizReviewComponent";
import EmailVerification from "./auth/EmailVerification";
import ForgotPassword from "./auth/ForgotPassword";
import IntroPage from "./auth/Intro";
import ContributeComponent from "./home/drawer/ContributeComponent";
import RequestComponent from "./home/drawer/RequestComponent";
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <DataProvider>
            <Switch>
              <PrivateRoute
                path="/stream/:stream/:branch/:career"
                component={CareerComponent}
              />
              <PrivateRoute
                path="/activity/:branch/:career/:answers"
                component={QuizReviewComponent}
              />
              <PrivateRoute
                path="/activity/:branch/:career"
                component={QuizComponent}
              />
              <PrivateRoute
                path="/activity/:branch"
                component={MultipleQuizComponent}
              />
              <PrivateRoute
                path="/stream/:stream"
                component={BranchComponent}
              />
              <PrivateRoute
                path="/contribute"
                component={ContributeComponent}
              />
              <PrivateRoute
                path="/request"
                component={RequestComponent}
              />
              <PrivateRoute
                path="/email verification"
                component={EmailVerification}
              />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/intro" component={IntroPage} />

              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute exact path="/" component={HomeComponent} />
            </Switch>
          </DataProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
