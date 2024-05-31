import React from 'react';
import './App.css';
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Pics from './Components/Pics';
import Card from './Components/Card';
import Table from './Components/Table';
import LabelBottomNavigation from './Components/BottomNavigation';





function App() {
  return (
    <>
    <Navbar/>
      {/* <Login/> */}
      <Pics/>
      <Card/>
      <Table/>
      <LabelBottomNavigation/>
    </>
  );
}

export default App;
