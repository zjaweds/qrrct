import React from 'react';
import logo from './logo.svg';
import './App.css';
import Qrscan from './Qrscan';
// import PriceTag from './PriceTag';
import ScannedDetails from '../src/screens/scan_details.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
        {/* scanner */}
          {/* <Route path='/' element={<PriceTag />}/> */}
          <Route path='/' element={<Qrscan/>}/>
          <Route path='scanneddetails' element={<ScannedDetails/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
