import React from "react";
import { useState } from 'react';
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
function App() {
const [ cartShown,setCartShown]=useState(false);


const showCartHandler=()=>{
  return(
    setCartShown(true)
  )
}

const hideCartHandler=()=>{
  return(
    setCartShown(false)

  )
}


  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}/>} {/*If cartshown is false the <Cart/> will hide vice versa*/ }
      <Header onCartShowtoHeader={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;

