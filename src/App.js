import React, { Component } from 'react';
import Home from "./routes/Home"
import { Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/sneakers" element={<Home />} />
      </Routes>
    );
  }
}

export default App;
