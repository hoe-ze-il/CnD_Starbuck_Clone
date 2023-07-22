import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/HomePage/Home';
import Rewards from './Pages/RewardsPage/Rewards';
import GiftCards from './Pages/GiftCardPage/GiftCards';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path='/giftcards' element={<GiftCards />} />
    </Routes>
  );
}

export default App;
