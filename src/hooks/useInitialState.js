import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  mobileMenuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== indexValue),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };
  const toggleMobileMenu = () => {
    setState({
      ...state,
      mobileMenuIsOpen: !state.mobileMenuIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleMenu,
    toggleOrder,
    toggleMobileMenu,
  };
};
export default useInitialState;
