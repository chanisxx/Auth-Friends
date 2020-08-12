import React, {useState} from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {

  
  //attempt at making 'error' a state so that login can respond to failed
  //login with an error message. however not sure how to setError in the 
  //Private Route, which

  return (
    <div className='container'>
      <div className='navbar'>
        <div>
          <Link className='a' to='/'>
           <i class="fas fa-users"></i>
          </Link>
          <span className='logo'>friends</span>
        </div>
        <nav>
          <Link className='a' to='/'>home</Link>
          <Link className='a' to='/protected'>friends list</Link>
          <Link className='a sign' to='/sign-in'>sign in</Link>
        </nav>
      </div>
      
      <Switch>
      <Route path='/sign-in' component={Login}/>
      <Route exact path='/'>
        <h1 className='home-h'>
          <div>
            <p>welcome to the</p>
            <p>friends list app .</p>
          </div>
          <div className='faces'>
            <i class="far fa-smile"></i>
            <i class="fas fa-smile"></i>
          </div>
        </h1>
      </Route>
      <PrivateRoute exact path='/protected'
      component={FriendsList}/>
      </Switch>
      
    </div>
  );
};

export default App;
