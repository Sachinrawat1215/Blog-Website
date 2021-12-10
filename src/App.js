import React from 'react';
import './App.scss'
import Home from './Pages/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import CreatePost from './Pages/CreatePost';
import Post from './Pages/Post';
import Update from './Pages/Update';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/create' element={<CreatePost />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;