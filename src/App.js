import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router';
import Home from './routs/home/home.componet.jsx';
import Navigation from './routs/navigation/navigation.componet';
import Shop from './routs/shop/shop.componet';

function App() {
  return (
    < Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}>
        </Route>
        <Route path='/shop' element={<Shop />}></Route>
      </Route>
    </Routes >
  )
}

export default App;
