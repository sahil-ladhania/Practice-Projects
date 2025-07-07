import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Liked from './pages/Liked';
import MoodTracks from './pages/MoodTracks';
import { useEffect } from 'react';
import { getGenre } from './services/test';

function App() {  

  useEffect(() => {
    let isMounted = true;

    if(isMounted){
      console.log("HI");
      getGenre()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    return () => {
      isMounted = false;
    }
  }, []);
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/liked-tracks' element={<Liked />} />
        <Route path='/mood-specific-tracks' element={<MoodTracks />} />
      </Route>
    </Routes>
  )
}

export default App