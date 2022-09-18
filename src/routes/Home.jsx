import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function Home() {
  const [cartValue, setCartValue] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div>
      <Navbar
        cartValue={cartValue}
        setCartValue={setCartValue}
        isGreen={isGreen}
      />
      <HeroSection
        cartValue={cartValue}
        setCartValue={setCartValue}
        isGreen={isGreen}
        setIsGreen={setIsGreen}
      />
    </div>
  );
}

export default Home;
