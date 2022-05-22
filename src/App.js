import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import CreateGig from './components/CreateGig';
import ListBidders from './components/ListBidders';
import FreelancerGigs from './components/FreelancerGigs';


function App() {
  return (
    
    <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route path='/profile/:id/:username' element={<Profile/>}/>
      <Route path='/home/:id/:username' element={<Home/>}/>
      <Route path='/chat/:id' element={<Chat/>}/>
      <Route path='/create-gig/:id' element={<CreateGig/>}/>
      <Route path='/bidders' element={<ListBidders/>}/>
      <Route path='/bidded-gigs/:id' element={<FreelancerGigs/>}/>
    </Routes>
  </Router>
    
    
  
  );
}

export default App;
