import { createContext, useEffect, useState } from "react";
import isEqual from 'lodash/isEqual';

export const CartContext = createContext({});

export function CartContextProvider({ children, initialCartData }) {
  const [cartProducts, setCartProducts] = useState(initialCartData || []);
  const [cartSelectedOptions, setCartSelectedOptions] = useState({});
  const lsKey = 'cartProducts';
  const ls = typeof window !== 'undefined' ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem(lsKey)) {
      setCartProducts(JSON.parse(ls.getItem(lsKey)));
    }
  }, []);

  useEffect(() => {
    if (cartProducts?.length >= 0) {
      ls?.setItem(lsKey, JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem(lsKey)) {
      setCartProducts(JSON.parse(ls.getItem(lsKey)) || []);
    }
  }, []);

  function addProduct(productId, selectedOptions, product, newImages, images) {
    // Check if selectedOptions is empty
    if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
      // Show an error pop-up
      setErrorMessage('Options must be chosen.');
      return;
    }

    console.log('Selected Options:', selectedOptions);
    console.log('Images:', images);
    console.log('NewImages:', newImages);

    const existingProduct = cartProducts.find((item) => (
      item.productId === productId &&
      isEqual(item.options, selectedOptions) &&
      isEqual(item.newImages, newImages)
    ));

    console.log('Existing Product:', existingProduct);

    if (existingProduct) {
      // If the product already exists with the same options and images, update its quantity
      setCartProducts((prev) =>
        prev.map((cartItem) =>
          cartItem === existingProduct
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the product doesn't exist with the same options and images, add it as a new cart item with quantity 1
      const newCartItem = {
        productId,
        options: selectedOptions,
        productDetails: product,
        images,
        quantity: 1,
      };

      setCartProducts((prev) => {
        const updatedCart = [...prev, newCartItem];
        console.log('Updated Cart:', updatedCart);
        ls?.setItem(lsKey, JSON.stringify(updatedCart)); // Save to local storage
        return updatedCart;
      });
    }
  }


  function removeProduct(productId, selectedOptions) {
    setCartProducts(prev => {
      // Find the index of the item in the cart
      const index = prev.findIndex(item =>
        item.productId === productId && JSON.stringify(item.options) === JSON.stringify(selectedOptions)
      );

      if (index !== -1) {
        // If the item is found in the cart
        const updatedCart = [...prev];
        const item = updatedCart[index];

        // Decrease the quantity
        item.quantity = (item.quantity || 1) - 1;

        // Remove the item if the quantity becomes 0
        if (item.quantity <= 0) {
          updatedCart.splice(index, 1);
        }

        return updatedCart;
      }

      return prev;
    });

    setCartSelectedOptions(prev => {
      const updatedOptions = { ...prev };
      const currentQuantity = updatedOptions[productId] || 1;

      // Decrease the quantity
      updatedOptions[productId] = currentQuantity - 1;

      // Remove the options if the quantity becomes 0
      if (updatedOptions[productId] <= 0) {
        delete updatedOptions[productId];
      }

      return updatedOptions;
    });
  }

  function clearCart() {
    console.log('Clearing Cart');
    setCartSelectedOptions({});
  }

  return (
    <CartContext.Provider value={{ cartProducts, cartSelectedOptions, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
