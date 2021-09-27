import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddPlant from './views/AddPlant';
import Home from './views/Home';
import Auth from './views/Auth.js.js';
import UpdateUser from './views/UpdateUser';
import Navbar from './components/Navbar';
import AboutUs from './views/about/AboutUs';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
} from './views/about/Data';
import UpdatePlant from './views/UpdatePlant';

function App() {
  return (
    <div className='h-full bg-indigo-100'>
      <Switch>
        <Route path='/update-plant/:id'>
          <UpdatePlant />
        </Route>

        <Route path='/update-profile'>
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
