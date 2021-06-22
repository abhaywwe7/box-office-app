import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>This is 404 page.</Route>
      </Switch>
    </div>
  );
}

export default App;
