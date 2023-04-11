
import './App.css'
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  );
};

export default App;


