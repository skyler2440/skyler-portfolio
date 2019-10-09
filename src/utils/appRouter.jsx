import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/mainPages/Home";
import Contact from "../components/mainPages/Contact";
import Projects from "../components/mainPages/Projects";
const AppRouter = props => {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

        </Switch>
      </>
    );
  };
  
  export default AppRouter;
  