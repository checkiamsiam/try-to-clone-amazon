import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
     <Header ></Header>
     <Routes>
       <Route path='/' element={[<Banner></Banner> , <Shop></Shop>]}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/order' element={<Order></Order>}></Route>
       <Route path='/inventory' element={<Inventory></Inventory>}></Route>
     </Routes>
    </div>
  );
}

export default App;
