

import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Pizzas from '../pages/Pizzas'

const Routers = () => {
  return ( <Routes>
    <Route path = '/' element = {<Navigate to= '/home' />} />
    <Route path= '/home' element= {<Home/>} />
    <Route path= '/pizzas' element= {<Pizzas/>} />
  </Routes>
  )
}

export default Routers