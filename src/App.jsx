import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Play from './pages/play/Play';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game-count" element={<Home />} />
        <Route path="/game-count/play" element={<Play />} />
      </Routes>
    </div>
  );
}
