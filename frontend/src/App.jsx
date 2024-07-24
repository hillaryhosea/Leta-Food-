import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOder from "./pages/PlaceOder/PlaceOder";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Components/Login/Login";

const App = () => {

  const [showLogin, setShowLogins] = useState(false)

  return (
    <>
    {showLogin?<Login  setShowLogin={setShowLogins}/>:<></>}
      <div className="app">
        <Navbar setShowLogins={setShowLogins} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
