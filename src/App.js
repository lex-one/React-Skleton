import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter, 
  Switch 
} from 'react-router-dom';
import Home from './app/pages/Home';
import Login from './app/pages/auth/Login';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Home" component={Home} />
          <Route exact path="/auth/login" name="Home" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;