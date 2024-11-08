 


// import AsyncStorage from "@react-native-async-storage/async-storage"; 
// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     loadCartItems();
//   }, []);

//   const loadCartItems = async () => {
//     let cartItems = await AsyncStorage.getItem("cart");
//     cartItems = cartItems ? JSON.parse(cartItems) : [];
//     setCartItems(cartItems);
//     calculateTotalPrice(cartItems);
//   };

//   const addToCartItem = async (item) => {
//     let cartItems = await AsyncStorage.getItem("cart");
//     cartItems = cartItems ? JSON.parse(cartItems) : [];
//     let isExist = cartItems.findIndex((cart) => cart.id === item.id);
//     if (isExist === -1) {
//       cartItems.push(item);
//       setCartItems(cartItems);
//       await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
//       calculateTotalPrice(cartItems);
//     }
//   };

//   const deleteCartItem = async (id) => {
//     let cartItems = await AsyncStorage.getItem("cart");
//     cartItems = cartItems ? JSON.parse(cartItems) : [];
//     cartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(cartItems);
//     await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
//     calculateTotalPrice(cartItems);
//   };

//   const clearCart = async () => {
//     await AsyncStorage.removeItem("cart");
//     setCartItems([]);
//     setTotalPrice(0);
//   };

//   const calculateTotalPrice = (cartItems) => {
//     let totalSum = cartItems.reduce((total, item) => total + item.price, 0);
//     totalSum = totalSum.toFixed(2);
//     setTotalPrice(totalSum);
//   };

//   const value = {
//     cartItems,
//     addToCartItem,
//     deleteCartItem,
//     clearCart, // Add clearCart to context
//     totalPrice,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };



import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    setCartItems(cartItems);
    calculateTotalPrice(cartItems);
  };

  const addToCartItem = async (item) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      // If item is not in the cart, add it with quantity 1
      cartItems.push({ ...item, quantity: 1 });
    } else {
      // If item already exists, increase its quantity
      cartItems[itemIndex].quantity += 1;
    }

    setCartItems(cartItems);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    calculateTotalPrice(cartItems);
  };

  const deleteCartItem = async (id) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(cartItems);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    calculateTotalPrice(cartItems);
  };

  const clearCart = async () => {
    await AsyncStorage.removeItem("cart");
    setCartItems([]);
    setTotalPrice(0);
  };

  const getCartItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const updateCartItemQuantity = async (id, newQuantity) => {
    let cartItems = await AsyncStorage.getItem("cart");
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === id);
    
    if (itemIndex !== -1) {
      // If new quantity is 0, remove the item
      if (newQuantity === 0) {
        cartItems.splice(itemIndex, 1);
      } else {
        // Update quantity for the item
        cartItems[itemIndex].quantity = newQuantity;
      }
    }

    setCartItems(cartItems);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    calculateTotalPrice(cartItems);
  };

  const calculateTotalPrice = (cartItems) => {
    const totalSum = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalSum.toFixed(2));
  };

  const value = {
    cartItems,
    addToCartItem,
    deleteCartItem,
    clearCart,
    getCartItemQuantity,
    updateCartItemQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
