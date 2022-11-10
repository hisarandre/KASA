import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Header from './Layout/Header'
import Error from './Error'

 
function App(){
return (<BrowserRouter>
<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>);
}

export default App;

