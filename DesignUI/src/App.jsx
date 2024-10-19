import React, { useState, useEffect } from 'react';
import MyComponent from './Home/MyComponent';
import MainLayout from './Components/MainLayout';
import './App.css'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  return (
    <>
      {currentPath === '/' ? <MyComponent /> : <MainLayout />}
    </>
  );
}

export default App;
