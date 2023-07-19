import './App.scss';
import { Routes, Route } from "react-router-dom"
import GiftCards from './Pages/GiftCardPage/GiftCards';

function App() {

  return (
    <Routes>
      <Route path="/" />
      <Route path='/giftcards' element={<GiftCards />} />
    </Routes>
  );
}

export default App;
