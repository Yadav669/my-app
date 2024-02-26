// import { useState, useSyncExternalStore } from 'react';
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode has been enabled", "Success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "Success")
    }
  }

  return (
    <>
        <Router>
          <Navbar  title="TextUtils" textabout="About Us" texthome="Home " mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>
          <div className="container my-3">

            <Switch>
              <Route  path="/about" element={<About/>}>
                <About />
              </Route>
              <Route  path="/">
                <TextForm showAlert={showAlert} heading="Enter Text Here"/>
              </Route>
            </Switch>
      </div>
        </Router>
      
    </>
  );
}
export default App;
