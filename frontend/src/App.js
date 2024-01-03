import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
