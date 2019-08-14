import React from 'react';
import {
  Route,
  BrowserRouter, 
  Switch 
} from 'react-router-dom';
import DefaultPage from './app/pages/DefaultPage';
import Login from './app/pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="Home" component={DefaultPage} />
        <Route exact path="/auth/login" name="Home" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
