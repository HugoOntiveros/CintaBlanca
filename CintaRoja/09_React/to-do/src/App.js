// Dentro de APP vamos a llamar a nuestros containers
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskContainer from "./containers/TaskContainer";
import CreateContainer from "./containers/CreateContainer";
import NotFoundContainer from "./containers/NotFoundContainer";
import Navbar from "./components/Navbar";
import "./App.css";

// SPA: Single Page Application, posible gracias a React 
// PWA: Progressive Wab App
// Reglas de routing
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TaskContainer} />
        <Route exact path="/create-task" component={CreateContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;