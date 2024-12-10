import React from "react";

// Restaurents component receives an 'item' prop
const Restaurents = ({ item }) => {
  // Destructuring the 'item' object to extract necessary information
  const {
    info: {
      name,
      avgRating,
      costForTwo,
      totalRatingsString,
      cloudinaryImageId,
      cuisines,
      sla: { deliveryTime },
    },
  } = item;

  // Render the restaurant information
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        padding: "10px",
      }}
    >
      {/* Display the restaurant name */}
      <h1
        style={{
          fontSize: "20px",
          margin: 0,
          fontFamily: "Gabarito",
          fontWeight: "700",
        }}
      >
        {name}
      </h1>

      {/* Display the restaurant image */}
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        style={{
          height: "150px",
          width: "200px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Gabarito",
          fontWeight: "100",
        }}
      >
        {/* Display the average rating */}
        <h3>Rating: ⭐{avgRating}</h3>

        {/* Display the list of cuisines */}
        <li
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: "900",
            alignContent: "center",
          }}
        >
          {cuisines.join(",")}
        </li>

        {/* Display the cost for two */}
        <h3>Only {costForTwo}</h3>

        <div
          style={{
            display: "flex",
            gap: "50px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Display the delivery time */}
          <h3> Delivery in {deliveryTime} Min</h3>
        </div>
      </div>
    </div>
  );
};

export default Restaurents;
