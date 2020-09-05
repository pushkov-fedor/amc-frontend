import React from "react";
import QueueForm from "./components/QueueForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QueueInfo from "./components/QueueInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/queue-form">
              <QueueForm />
            </Route>
            <Route path="/queue-info">
              <QueueInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
