import { Redirect, Route } from "react-router";


const AdminRoute = props => {
    const role = JSON.parse(sessionStorage.getItem("user")).role;
    console.log(role);
    if (role !== "Admin"){
        return <Redirect to ="/"/>;
    }
    else
    {
        return <Route {...props}/>;
    }
};
export default AdminRoute;