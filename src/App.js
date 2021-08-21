/*eslint-disable*/
import React from "react";
import './App.css';
import Allcomponents from "./allcomponents";
import About from "./components/About";
import Error from "./components/Error";
import Allmap from "./components/Allmap";
import { Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Allcomponents} />
        <Route exact path="/about" component={About} />
        <Route exact path="/map" component={Allmap} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
