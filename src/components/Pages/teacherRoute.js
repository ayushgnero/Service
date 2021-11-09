import { ReactSession } from "react-client-session";
import { Redirect, Route } from "react-router";
const TeacherRoute = props => {
    const role = JSON.parse(sessionStorage.getItem("user")).role;    
    if (role !== "Teacher" && role !== "Admin"){
        return <Redirect to ="/"/>;
    }
    else
    {
        return <Route {...props}/>;
    }
};
export default TeacherRoute;