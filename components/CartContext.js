import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  const [cartSelectedOptions, setCartSelectedOptions] = useState({});

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

  function addProduct(productId, selectedOptions, product) {
    setCartProducts(prev => [...prev, productId]);
    setCartSelectedOptions(prev => ({
      ...prev,
      [productId]: selectedOptions || {},
    }));
  }

  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
    setCartSelectedOptions(prev => {
      const updatedOptions = { ...prev };
      delete updatedOptions[productId];
      return updatedOptions;
    });
  }

  function clearCart() {
    console.log('Clearing Cart');
    setCartProducts([]);
    setCartSelectedOptions({});
  }

  return (
    <CartContext.Provider value={{ cartProducts, cartSelectedOptions, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}