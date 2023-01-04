import React from 'react';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Arabic from './components/pages/Arabic';
import Egypt from './components/pages/Egypt';
import English from './components/pages/English' 
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import Usa from './components/pages/Usa';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';
import Register from './components/pages/Register';

function App() {


  return (
    <>
     <AuthContextProvider>
       <Navbar />
       <Routes>

         <Route index exact element={<Home />} />
         <Route path='/arabic' exact element={<Arabic />} /> 
         <Route path='/egypt' exact element={<Egypt />} />
         <Route path='/english' exact element={<Protected><English /></Protected>} />
         <Route path='/log-in' exact element={<Login />} />
         <Route path='/usa' exact element={<Usa />} />
         <Route path='/register' exact element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}


export default App;
