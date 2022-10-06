import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/partials/NavBar';

import Home from './components/routes/Home';
import PokemonCards from './components/routes/PokemonCards';
import PokemonCard from './components/routes/PokemonCard';
import NewPokemonCard from './components/routes/NewPokemonCard';
import EditPokemonCard from './components/routes/EditPokemonCard';


export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pokemoncards' element={<PokemonCards />}></Route>
          <Route path='/pokemoncards/:id' element={<PokemonCard />}></Route>
          <Route path='pokemoncards/new' element={<NewPokemonCard />}></Route>
          <Route path='/pokemoncards/:id/edit' element={<EditPokemonCard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


