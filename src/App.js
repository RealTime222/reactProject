//import logo from './logo.svg';
//import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/entrance.js'
import Entrance from './components/entrance.js';
import AddNewUser from './components/newUser';
import Calendar from './components/calendar';
import Day from './components/day';
import AddNewEvent from './components/newEvent';
import { useEffect } from 'react';
import { useState } from 'react';
import EditEvent from './components/editEvent';

function App() {
  
  const[id,setId]=useState();
  const[e,setE]=useState();
const[sun2,setSun2]=useState()

 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entrance setId = {setId}/>} />
      <Route path="/newUser" element={<AddNewUser setId = {setId}/>}/>
      <Route path="/calendar" element={<Calendar setSun2={setSun2} userId={id}/>} />
      <Route path="/newEvent/:type" element={<AddNewEvent userId={id}/>} />
      <Route path="/editEvent/:ee" element={<EditEvent/>} />
      
    </ Routes>
  </BrowserRouter>


   //<AddNewUser></AddNewUser>
      // <Entrance></Entrance>
    
  );
}

export default App;
