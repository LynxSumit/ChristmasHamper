import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Components/Home'
import CreateHamper from './Components/CreateHamper'

import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Components/Checkout'
function App() {


  return (
    <BrowserRouter>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/create-hamper' exact element={<CreateHamper/>}/>
<Route path='/checkout' exact element={<Checkout/>}/>

</Routes>
     <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
