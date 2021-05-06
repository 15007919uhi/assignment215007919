import QuestionPage from './pages/QuestionPage';
import React, { useState, useEffect } from 'react';
import Login from './components/Login'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route 
     {...rest}
     render={props =>
      authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route 
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/QuestionPage" />
          )
      }
    />
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    console.log("authenticated", authenticated)
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  }, [authenticated]);

  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute exact path="/" authenticated={authenticated} component={Login} />
          <PrivateRoute path="/questionpage" authenticated={authenticated} component={QuestionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
