import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Total from '../pages/Total'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz-dashboard' element={<Quiz/>}/>
        <Route path='/result' element={<Total/>}/>
    </Routes>
  )
}

export default Mainroutes