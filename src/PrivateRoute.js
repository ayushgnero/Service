import { ReactSession } from "react-client-session";
import { Redirect, Route } from "react-router";

const PrivateRoute = props => {

    if (!JSON.parse(sessionStorage.getItem("flag"))){
        return <Redirect to ="/"/>;
    }
    else
    {
        return <Route {...props}/>;
    }
    

};
export default PrivateRoute;