import { Routes, Route } from 'react-router-dom';

import './App.css';
import Game from './game/Game';
import Home from './home/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
