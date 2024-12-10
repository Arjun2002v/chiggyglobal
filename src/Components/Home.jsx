import React, { useEffect, useState } from "react";
import Restaurents from "./Restaurents";
import { useNavigate } from "react-router-dom";

export const LoadingScreen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f9f9f9",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderRadius: "50%",
        borderTop: "5px solid #3498db",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  </div>
);

// CSS for Spinner
const styles = document.createElement("style");
styles.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styles);

export const Home = () => {
  const [menuData, setMenuData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [text, setText] = useState(""); // State for search input
  const nav = useNavigate();
  const [Loading, setLoading] = useState(false);
  const API_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.992311712735347&lng=77.70354036655421&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const restaurants =
          data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []; // Conditionally render data
        setMenuData(restaurants);
        setFilteredData(restaurants); // Initially show all restaurants
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false); // Stop loading after fetch or in case of error
      }
    };

    fetchApiData();
  }, [API_URL]); // Add `API_URL` as a dependency to avoid stale references

  // Filter by rating > 4
  const filterByRating = () => {
    const filtered = menuData.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredData(filtered);
  };

  // Filter by delivery time (ascending order)
  const filterByDelivery = () => {
    const sorted = [...menuData].sort(
      (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
    );
    setFilteredData(sorted);
  };

  // Search restaurants by name
  const filterBySearch = () => {
    const filtered = menuData.filter((item) =>
      item.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  console.log(filteredData, "appy");
  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search Your Food"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            width: "300px",
            marginRight: "10px",
            border: "none",
            backgroundColor: "#e6e6e6",
            borderRadius: "15px",
            paddingLeft: "20px",
            fontFamily: "Gabarito",
          }}
        />
        <button
          onClick={filterBySearch}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "15px",
            cursor: "pointer",
            backgroundColor: "black",
          }}
        >
          Search
        </button>
      </div>

      <h1 style={{ marginBottom: "50px", fontFamily: "Gabarito" }}>
        Top Restaurants Around Bangalore
      </h1>

      {/* Buttons for Filters */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={filterByRating}
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "10px",
            marginRight: "10px",
            cursor: "pointer",
            fontFamily: "Gabarito",
            backgroundColor: "black",
          }}
        >
          Sort by Rating 4★
        </button>
        <button
          onClick={filterByDelivery}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontFamily: "Gabarito",
            backgroundColor: "black",
          }}
        >
          Sort by Delivery Time
        </button>
      </div>

      {/* Restaurant Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredData ? (
          <>
            {" "}
            {filteredData.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px",

                  borderRadius: "20px",

                  textAlign: "center",
                  width: "350px",
                  height: "450px",
                  display: "grid",
                  alignItems: "center",
                }}
                onClick={() => {
                  if (item.info && item?.info?.id) {
                    nav("/menu/" + item?.info?.id, { state: { item } });
                  } else {
                    console.error("Item info or ID is missing", item);
                  }
                }}
              >
                {Loading ? (
                  <>
                    <LoadingScreen />
                  </>
                ) : (
                  <Restaurents key={item?.info?.id} item={item} />
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </div>
    </div>
  );
};
