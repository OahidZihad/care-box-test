import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import GetData from "./Components/GetData/GetData";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/formData">
            <Form />
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
