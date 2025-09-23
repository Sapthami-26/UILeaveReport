// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OutOfOfficeState1Employee from './pages/outofofficeState_1_Employee';
import MarriageLeave_State1_Employee from './pages/MarriageLeave_State1_Employee';
import LossofPay_State1_Employee from './pages/LossofPay_State1_Employee';
import MedicalLeave_State1_Employee from './pages/MedicalLeave_State1_Employee';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<OutOfOfficeState1Employee />} />
        <Route path="MarriageLeave_State1_Employee" element={<MarriageLeave_State1_Employee/>} />
        <Route path="LossofPay_State1_Employee" element={<LossofPay_State1_Employee/>} />
        <Route path="MedicalLeave_State1_Employee" element={<MedicalLeave_State1_Employee/>} />       
      </Routes>
    </>
  );
}

export default App;