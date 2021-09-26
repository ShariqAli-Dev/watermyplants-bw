import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddPlant from './views/AddPlant';
import Home from './views/Home';
import Auth from './views/Auth.js.js';
import SignUp from './views/SignUp';
import UpdateUser from './views/UpdateUser';
import Navbar from './components/Navbar';
import AboutUs from './views/about/AboutUs';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
} from './views/about/Data';

function App() {
  return (
    <div className='h-full bg-indigo-100'>
      <Switch>
        <Route path='/update-profile'>
          <Navbar />
          <UpdateUser />
        </Route>

        <Route path='/add-plant'>
          <AddPlant />
        </Route>

        <Route path='/about'>
          <Navbar />
          <AboutUs {...homeObjOne} />
          <AboutUs {...homeObjTwo} />
          <AboutUs {...homeObjThree} />
          <AboutUs {...homeObjFour} />
        </Route>

        <Route path='/home'>
          <Navbar />
          <Home />
        </Route>

        <Route path='/'>
          <Auth />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
