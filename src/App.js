import './App.css';
import login from "./components/Pages/login";
import forgotpassword from "./components/Pages/forgotpassword";
import UserProfile from "./components/Pages/UserProfile";
import UserProfile1 from "./components/Pages/UserProfile1";
import UserProfile2 from "./components/Pages/UserProfile2";
import Dashboard from "./components/Pages/Dashboard";
import Dashboard1 from "./components/Pages/Dashboard1";
import Dashboard2 from "./components/Pages/Dashboard2";
import bulkuser from "./components/Pages/BulkUser";
import bulkupload from "./components/Pages/BulkUpload";
import question from "./components/Pages/question";
import results from "./components/Pages/results";
import leaderboards from "./components/Pages/leaderboards";
import leaderboards1 from "./components/Pages/leaderboards1";

import test from "./components/Pages/test";
import demotest from "./components/Pages/demotest";
import SignUp from "./components/Pages/SignUp";
import resources from "./components/Pages/Resources";
import PrivateRoute from './PrivateRoute';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import TeacherRoute from './components/Pages/teacherRoute';
import AdminRoute from './components/Pages/AdminRoute';
function App() {
  return <Router>

  <Switch>
    <Route exact path = "/" component = {login} />
    <Route exact path = "/login" component = {login} />

    <PrivateRoute exact path = "/Dashboard" component = {Dashboard} />
    <PrivateRoute exact path = "/Resources" component = {resources} />
    <PrivateRoute exact path = "/signup" component = {SignUp} />
    <PrivateRoute exact path = "/UserProfile" component = {UserProfile} />
    <PrivateRoute exact path = "/question" component = {question} />
    <PrivateRoute exact path = "/results" component = {results} />
    <PrivateRoute exact path = "/leaderboards" component = {leaderboards} />
    <PrivateRoute exact path = "/leaderboards1" component = {leaderboards1} />

    <PrivateRoute exact path = "/test" component = {test} />
    <PrivateRoute exact path = "/demotest" component = {demotest} />

    <TeacherRoute exact path = "/DashboardTeacher" component = {Dashboard1} />
    <TeacherRoute exact path = "/bulkupload" component = {bulkupload} />
    <TeacherRoute exact path = "/UserProfileTeacher" component = {UserProfile1} />

    <AdminRoute exact path = "/DashboardAdmin" component = {Dashboard2} />
    <AdminRoute exact path = "/bulkuser" component = {bulkuser} />
    <AdminRoute exact path = "/UserProfileAdmin" component = {UserProfile2} />

  </Switch>
  </Router>
}

export default App;
