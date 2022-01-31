import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import Review from './components/review/Review';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Shop/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/review" element={ <Review/>}/>
          <Route exact path="/inventory" element={  <Inventory/>}/>
        </Routes>
      </Router>
  
 
    </div>
  );
}

export default App;
