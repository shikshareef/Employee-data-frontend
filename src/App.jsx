import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Land from './Land'
import ViewTable from './ViewTable'
import Update from './Update'

function App() {
  const [count, setCount] = useState(0)

  return (

   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Land/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/all' element={<ViewTable/>}></Route>
    <Route exact path='/:id' element={<Update/>}/>
   </Routes>

   </BrowserRouter>

  )
}

export default App
