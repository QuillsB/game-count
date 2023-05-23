import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game-count" element={<Home />} />
      </Routes>
    </div>
  );
}
