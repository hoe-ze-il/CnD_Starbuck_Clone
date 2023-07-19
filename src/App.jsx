import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/HomePage/Home';
import Rewards from './Pages/RewardsPage/Rewards';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rewards" element={<Rewards />} />
    </Routes>
  );
}

export default App;
