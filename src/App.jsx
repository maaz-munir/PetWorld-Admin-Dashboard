import './App.css'
import { Route, Routes } from 'react-router-dom'

import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import VerifyBreeder from './components/VerifyBreeder'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/home/breeder" element={<VerifyBreeder/>} />
      <Route path="/home/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
