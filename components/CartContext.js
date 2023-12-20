import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    console.log('Cart Products:', cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    console.log('Local Storage Cart Products (Before):', ls?.getItem('cart'));
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
    console.log('Local Storage Cart Products (After):', cartProducts);
  }, []);

  useEffect(() => {
    if (cartProducts?.length >= 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);


  function addProduct(productId) {
    setCartProducts(prev => [...prev, productId]);
  }

  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearCart() {
    console.log('Clearing Cart');
    setCartProducts([]);
  }


  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}