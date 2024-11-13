import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    addToCart: () => {},
  });

export default function CartItems({ children }) {


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    setCartItems((currentCart) => {
      const currCart = [...currentCart];
      let isThereItem = false;
      for(let i = 0; i < currCart.length; i++){
        const currItem = currCart.slice(i, i+1)[0];
        if(currItem.id == itemToAdd.id){
            currCart[i].quantity += itemToAdd.quantity;
            isThereItem = true;
        }
      }
      if(!isThereItem){
        currCart.push(itemToAdd);
      }
      return currCart;
    });
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartItems.propTypes = {
  children: PropTypes.element,
};