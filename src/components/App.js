import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import Users  from "./Users";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={HomePage} />
         <Route path="/profile/:id" component={Users}></Route> 
       
        </Switch>
    </div>
  );
}

export default App;



