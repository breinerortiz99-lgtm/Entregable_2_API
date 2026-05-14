import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import AllCharacters from './Pages/AllCharacters/AllCharacters';
import Details from './Pages/Details/Details';
import Filtrar from './Pages/Filtrar/Filtrar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div id="ppal">
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/AllCharacters" />}/>
          <Route path="/AllCharacters" element={<AllCharacters />}/>
          <Route path="/Filtrar" element={<Filtrar />}/>
          <Route path="/Details/:id" element={<Details />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;