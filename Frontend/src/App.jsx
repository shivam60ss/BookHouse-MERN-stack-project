import React from 'react'

import Home from './HOME/Home';
import {Route,Routes} from "react-router-dom"
import Coursess from './COURSES/Coursess';
import Signup from './components/signup';


const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Coursess />} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
      </div>
      
    </>
  );
}

export default App
