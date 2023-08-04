import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/HomePage/Home';
import Menu from './Pages/MenuPages/Menu';
import SubMenu from './Pages/MenuPages/SubMenu';
import Customize from './Pages/MenuPages/Customize';
import Rewards from './Pages/RewardsPage/Rewards';
import GiftCards from './Pages/GiftCardPage/GiftCards';
import FavoriteProducts from './Pages/FavoriteProductsPage/FavoriteProducts';
import PreviousOrder from './Pages/PreviousOrderPage/PreviousOrder';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/:sub_category" element={<SubMenu />} />
      <Route path='/:item_type/:item_id' element={<Customize />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path='/giftcards' element={<GiftCards />} />
      <Route path='/favorite_products' element={<FavoriteProducts /> } />
      <Route path="/previous_order" element={<PreviousOrder />} />
    </Routes>
  );
}

export default App;
