import  { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CssBaseline, ThemeProvider, createTheme, Typography } from "@mui/material";
import themeSettings from './theme';
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./scenes/NavBar/index";
import Home from "./scenes/Home/index";
import CreateEvent from "./scenes/CreateEvent/index";
import FormStep1 from './scenes/CreateEvent/FormStep1';
import FormStep2 from './scenes/CreateEvent/FormStep2';
import FormStep3 from './scenes/CreateEvent/FormStep3';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers";



function App() {
  const mode = useSelector((state:any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);
  // const theme = {};

  return (
    <div className="App">
      <LocalizationProvider dateAdapter = {AdapterMoment} >
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <CssBaseline/>
          <Routes>
            <Route element = {<NavBar/>}>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/create" element = {<CreateEvent/>}/>
              <Route path = "/create/formstep1" element = {<FormStep1/>}/>
              <Route path = "/create/formstep2" element = {<FormStep2/>}/>
              <Route path = "/create/formstep3" element = {<FormStep3/>}/>
            </Route>
          </Routes>
          {/* <Typography variant = "h1">
              Welcome to the new age of ticketing.
          </Typography> */}
        </ThemeProvider>
      </BrowserRouter>
      </LocalizationProvider>
    </div>

  )
}

export default App
