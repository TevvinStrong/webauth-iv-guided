import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import login from './login.js';
import signup from './signup.js';
import users from './users.js';

function App() {
  return (
    <div>
      <ul>
        <li><NavLink to="/login">login</NavLink></li>
        <li><NavLink to="/signup">signup</NavLink></li>
        <li><NavLink to="/users">users</NavLink></li>
      </ul>


      <main>
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/users" component={users} />
      </main>
    </div>
  );
}

export default App;
