import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import MainForm from "./Components/MainForm/MainForm";
import GetData from "./Components/GetData/GetData";
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <MainForm />
          </Route>
          <Route path="/data">
            <GetData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
