import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Community from './pages/Community'
import History from './pages/History'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/" element={<Layout />}>
        {/* Pages */}
        <Route path='/home' element={<Home />} />
        <Route path='/community' element={<Community />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  )
}

export default App
