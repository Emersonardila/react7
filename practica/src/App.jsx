import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import './index.css'
import Nav from './components/Nav'
import GetUsers from './components/GetUsers';
import CreateUsers from './components/CreateUsers';
import CreateUsersForm from './components/CreateUsersForm';

function App() {
  

  return (
    <>
       <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<GetUsers/>} />
        <Route path='/post' element={<CreateUsers />} />
        <Route path='/post2' element={<CreateUsersForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
