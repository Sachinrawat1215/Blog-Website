import React from 'react';
import './CSS/App.scss'
import Home from './Pages/Home';
import { Route, Switch } from "react-router-dom";
import CreatePost from './Pages/CreatePost';
import Post from './Pages/Post';
import Update from './Pages/Update';

const App = () => {
   return (
      <div>
         <Switch>
            <Route exact path='/create'>
               <CreatePost />
            </Route>
            <Route exact path='/post/:id'>
               <Post />
            </Route>
            <Route exact path='/update/:id'>
               <Update />
            </Route>
            <Route exact path='/'>
               <Home />
            </Route>
         </Switch>
      </div>
   )
}

export default App;