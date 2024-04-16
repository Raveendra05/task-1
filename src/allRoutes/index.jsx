import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Register from '../pages/register'
import Dashboard from '../pages/dashboard'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Register/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes