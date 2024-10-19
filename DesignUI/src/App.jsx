import React from 'react';
import MyComponent from './Home/MyComponent';
import MainLayout from './Components/MainLayout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/Components/MainLayout" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
