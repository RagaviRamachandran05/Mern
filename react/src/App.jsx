import React from 'react';
import User from "./components/User";
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import State from './hooks/State';
import './App.css';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/services" Component={Services}/>
      <Route path="/state" element={<State/>}/>
      

    </Routes>
      <User 
        name="Ragavi" 
        dept="IT" 
        skills={['HTML','CSS','JAVA','JS']}
        hobbies={['Drawing','Listtening music','Playing Chess']} 
      />
    </>
  );
};

export default App;
