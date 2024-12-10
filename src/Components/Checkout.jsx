import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Checkout = () => {
  const [address, setAddress] = useState("");
  const location = useLocation();
  const { cart, quantity } = location.state || [];

  console.log(cart, "item");

  if (!cart) {
    alert("Empty Cart");
    return null; // Return early if the cart is empty
  }

  // Define the handlePayment function
  const handlePayment = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }
    // Implement payment logic here
    console.log("Proceeding to payment with address:", address);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Gabarito", fontSize: "40px" }}>Checkout</h1>
      <p style={{ fontSize: "18px" }}>
        Thank you for adding items to your cart. Please provide your delivery
        address and proceed to payment.
      </p>
      {cart.map((pro, index) => (
        <div key={index}>
          {pro.cards[5].groupedCard.cardGroupMap.REGULAR.cards
            .slice(1)
            .map((item, itemIndex) => (
              <div key={itemIndex}>
                {item.card.card.itemCards.map((product, productIndex) => (
                  <h2 key={productIndex}>{product.card.info.name}</h2>
                ))}
              </div>
            ))}
        </div>
      ))}
      <input
        type="text"
        placeholder="Enter your delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "80%", padding: "10px", margin: "20px 0" }}
      />
      <button
        onClick={handlePayment}
        style={{ padding: "10px 20px", fontSize: "18px" }}
      >
        {quantity} item{quantity > 1 ? "s" : ""} in the cart
      </button>
    </div>
  );
};

export default Checkout;
