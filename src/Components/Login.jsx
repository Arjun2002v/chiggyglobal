import React from "react";
import { auth, provider, signInWithPopup } from "../firebaseConfig"; // Importing Firebase authentication, provider, and the method to handle popup-based authentication.
import { useNavigate } from "react-router-dom"; // Importing `useNavigate` hook for programmatic navigation.

const Login = ({ setUser }) => {
  const navigate = useNavigate(); // Initializing the navigation hook to redirect users after successful login.

  // Function to handle the login process using Firebase Authentication
  const handleLogin = async () => {
    try {
      // Initiating Google sign-in using Firebase's popup authentication method
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Storing the authenticated user's details in the parent component state via `setUser` prop
      navigate("/"); // Redirecting the user to the home page after a successful login
    } catch (error) {
      // Logging the error if the login process fails
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center", // Center-aligning text
        marginTop: "35vh", // Adding vertical spacing for centering the component
        display: "flex", // Enabling flexbox layout for alignment
        flexDirection: "column", // Stacking child elements vertically
        alignItems: "center", // Horizontally centering child elements
        justifyContent: "center", // Vertically centering child elements
      }}
    >
      <h1
        style={{
          fontSize: "30px", // Setting font size for the header
          fontWeight: "bold", // Making the text bold
          fontFamily: "Gabarito", // Using a custom font family
        }}
      >
        Login
      </h1>
      <button
        onClick={handleLogin} // Attaching the login handler to the button's click event
        style={{
          padding: "10px 20px", // Adding padding for better appearance
          fontSize: "20px", // Setting font size for button text
          borderRadius: "10px", // Rounding button corners
          border: "none", // Removing border for a flat design
          backgroundColor: "black", // Setting button background color
          color: "white", // Setting button text color
          fontFamily: "Gabarito", // Using the same custom font as the header
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
