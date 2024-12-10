import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Components/Home";
import { Menu } from "./Components/Menu";

import { Checkout } from "./Components/Checkout";
import { Nav } from "./Components/Nav";
import Login from "./Components/Login";
import { auth } from "./firebaseConfig";
import Cart from "./Components/Cart";

const App = () => {
  const [user, setUser] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      {user ? (
        <>
          <Nav
            user={user} // Pass user to Nav
            setUser={setUser} // Pass setUser to Nav
            menuData={menuData}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            setMenuData={setMenuData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  menuData={menuData}
                  filteredData={filteredData}
                  setFilteredData={setFilteredData}
                  setMenuData={setMenuData}
                />
              }
            />
            <Route path="/menu/:resID" element={<Menu />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
