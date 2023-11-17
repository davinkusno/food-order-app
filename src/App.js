import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const showCartHandler = () => {
    setCartIsShown((prevState) => !prevState);
  }

  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <>
      {cartIsShown && <Cart onClose={showCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
