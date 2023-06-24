/* Packages */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

/* Compnents */
import Home from "./resumes/pages/Home";
import NewResume from "./resumes/pages/NewResume";
import Auth from "./user/pages/Auth";
import Saved from "./user/pages/Saved";
import Temp from "./resumes/pages/Temp";
import Update from "./resumes/pages/Update";
import ContactUs from "./resumes/pages/ContactUs";
import AboutUs from "./resumes/pages/AboutUs";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';




const App = () => {

  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/templates" exact>
          <Temp />
        </Route>
        <Route path="/uid/resume" exact>
          <Saved />
        </Route>
        <Route path="/resume/new" exact>
          <NewResume />
        </Route>
        <Route path="/resume/rid" exact>
          <Update />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/templates" exact>
          <Temp />
        </Route>
        <Route path="/resume/new" exact>
          <NewResume />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
