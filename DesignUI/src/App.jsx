import React, { useState, useEffect } from 'react';
import MyComponent from './Home/MyComponent';
import MainLayout from './Components/MainLayout';
import './App.css'

function App() {
  const [componentToShow, setComponentToShow] = useState(<MyComponent />);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/Components/MainLayout') {
        setComponentToShow(<MainLayout />);
      } else {
        setComponentToShow(<MyComponent />);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return <>{componentToShow}</>;
}

export default App;