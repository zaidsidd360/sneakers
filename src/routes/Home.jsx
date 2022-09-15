import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function Home() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <div>
      <Navbar cartValue={cartValue} setCartValue={setCartValue} />
      <HeroSection cartValue={cartValue} setCartValue={setCartValue} />
    </div>
  );
}

export default Home;
