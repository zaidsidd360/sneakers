import React, { Component } from 'react';
import Home from "./routes/Home"
import { CartContextProvider } from './contexts/CartItemContext';


class App extends Component {
  render() {
    return (
      <CartContextProvider>
        <Home/>
      </CartContextProvider>
    );
  }
}

export default App;
