import { useState, useEffect } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage'
import BeerDetails from './pages/BeerDetails'
import RandomBeer from './pages/RandomBeer';
import './App.css';

function App() {
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);
 

  useEffect(()=>{
    setPathName(location.pathname)
  }, [location])
  
  return (
    <div className="App">
      { pathName !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/beers/random" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
