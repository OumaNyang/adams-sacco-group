import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// PAGES
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Messages from "./pages/Messages";
import Contributions from "./pages/Contributions";
import Support from "./pages/Support";
import Login from "./pages/Login";



export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/contributions" component={Contributions} />
          <Route path="/members" component={Members} />
          <Route path="/messages" component={Messages} />
          <Route path="/support" component={Support} />
          <Route path="/login" component={Login} />



        </Switch>
      </Router>
    </div>
  );
}
