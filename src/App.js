import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage'
import BeerDetails from './pages/BeerDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
