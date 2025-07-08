import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import AppliedJobs from './pages/AppliedJobs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/saved' element={<AppliedJobs />} />
      </Route>
    </Routes>
  )
}

export default App
