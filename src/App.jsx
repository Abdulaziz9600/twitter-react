import { useState } from 'react'
import './App.css'
import Header from './componets/Header/Header'
import Main from './componets/Main/Main'
import Section from './componets/Main/Section'
import Footer from './componets/Footer/Footer'
import Login from './componets/Login/Login'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'


function App() {
  const { twlogin, setlogin } = useState(false);
  const { pathname } = useLocation()
  
  
  const user = {
    username: 'abdulaziz',
    password: '125618',
  }
  
  const navigate = useNavigate()
  
  const uselogin = (params) => {
   
    return   (user.username === params.username && user.password === params.password) ? 
    navigate('/main') : navigate('/')
    
  }
  

  return (
    <>
      <div className=''>
        <div className='row'>

          {(pathname === '/') ? "" : <div className='col-3'><Header /></div>}

          <Routes>
            <Route path="/main" element={<div className='col-6'><Main /></div>} />
            <Route path="/Section" element={<div className='col-6'><Section /></div>} />
            <Route path='/' element={<Login login={twlogin} uselogin={uselogin}/>} />
          </Routes>
          {(pathname === '/') ? "" : <div className='col-3'><Footer /></div>}

        </div>
      </div>
    </>
  )
}

export default App
