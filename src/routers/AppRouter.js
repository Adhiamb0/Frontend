import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Users from "../components/users";
import Createuser from "../components/createuser";
import Header from "../components/header";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Users} />
                <Route path="/createuser" component={Createuser} />
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter