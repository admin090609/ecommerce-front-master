import { createContext, useEffect, useState } from "react";
import isEqual from 'lodash/isEqual';


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
    const existingProduct = cartProducts.find(
      (item) =>
        item.productId === productId &&
        isEqual(item.options, selectedOptions)
    );

    if (existingProduct) {
      // If the product already exists, update its quantity
      setCartProducts((prev) =>
        prev.map((item) =>
          item === existingProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product doesn't exist, add it as a new cart item with quantity 1
      const newCartItem = {
        productId,
        options: selectedOptions || {},
        productDetails: product, // Assuming 'product' contains details of the product
        quantity: 1, // Initial quantity for a new product
      };
      setCartProducts((prev) => [...prev, newCartItem]);
    }
  }


  function removeProduct(productId, selectedOptions) {
    setCartProducts(prev => prev.filter(item =>
      item.productId !== productId || JSON.stringify(item.options) !== JSON.stringify(selectedOptions)
    ));

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