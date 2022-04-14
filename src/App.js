import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/LogIn/Login';
import Order from './components/Order/Order';
import SequirePage from './components/SequirePage/SequirePage';
import Shiping from './components/Shiping/Shiping';
import Shop from './components/Shop/Shop';
import Signout from './components/SignOut/Signout';
import SignUp from './components/SignUP/SignUp';

function App() {
  return (
    <div>
     <Header ></Header>
     <Routes>
       <Route path='/' element={[<Banner></Banner> , <Shop></Shop>]}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/order' element={<Order></Order>}></Route>
       <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/signout' element={<Signout></Signout>}></Route>
       <Route path='/shipping' element={
         <SequirePage>
           <Shiping></Shiping>
         </SequirePage>
       }>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
