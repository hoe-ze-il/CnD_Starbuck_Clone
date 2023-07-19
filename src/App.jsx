import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/HomePage/Home';
import Menu from './Pages/MenuPages/Menu';
import SubMenu from './Pages/MenuPages/SubMenu';
import Customize from './Pages/MenuPages/Customize';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/:sub_category" element={<SubMenu />} />
      <Route path='/:item_type/:item_id' element={<Customize />} />
    </Routes>
  );
}

export default App;
