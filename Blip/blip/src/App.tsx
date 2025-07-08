import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import Comparison from './pages/Comparison'
import Watchlist from './pages/Watchlist'
import Markets from './pages/Markets'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/markets' element={<Markets />} />
          <Route path='/comparison' element={<Comparison />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
