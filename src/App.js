import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/alert';
import About from './component/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [Mode, setmode] = useState('light')

  const [clickMode, setclickmode] = useState(false)

  const [alerttype, setalert] = useState(null);


  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  function toggleclick() {
    if (clickMode === false) {
      setmode('dark')
      setclickmode(true)
      document.body.style.backgroundColor = '#05053B';
      showAlert("enable dark mode", "success");
    }
    else {
      setmode('light')
      setclickmode(false)
      document.body.style.backgroundColor = 'white';
      showAlert("enable light mode", "success");
    }
  }

  return (
    <Router>
      <Navbar tittle="TextUtils" mode={Mode} toggleclick={toggleclick} />
      <Alert alert={alerttype} />

      <div className='container my-3'>
        <Routes>
          <Route path="/About" element={<About mode={Mode}/>}/>
          <Route path="/" element={<TextForm heading="enter the text" mode={Mode} alert={showAlert} />}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
