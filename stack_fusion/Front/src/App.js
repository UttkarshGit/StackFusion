import logo from './logo.svg';
import './ind.css';
import { useState } from 'react';
import {
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Alldata from './Alldata';
import Sign from './Sign';

function App() {
 return(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Sign/>}/>
  <Route path="/alldata" element={<Alldata/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App;
