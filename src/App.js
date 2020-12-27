import React from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Shop></Shop>
      <hr/>
      <Cart></Cart>
    </div>
  );
}

export default App;
