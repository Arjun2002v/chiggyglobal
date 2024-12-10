import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";

export const Nav = ({ user, setUser }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div
      className="nav"
      style={{
        fontFamily: "Gabarito",
        fontWeight: "100",
        textDecoration: "none",
        fontSize: "20px",
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        marginTop: "50px",
      }}
    >
      <h2 style={{ color: "orange" }}>ChiggyApp</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/menu" style={{ textDecoration: "none" }}>
          Menu
        </Link>
      </div>
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>{user.displayName}</span>
          <button
            onClick={handleLogout}
            style={{
              marginLeft: "10px",
              fontFamily: "Gabarito",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
