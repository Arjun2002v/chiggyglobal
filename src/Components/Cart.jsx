import { useAtom } from "jotai";

import { activeAtom } from "./Menu";

const Cart = () => {
  const [activeData] = useAtom(activeAtom);
  const totalPrice = activeData.reduce((acc, item) => {
    const price = item.price || item.defaultPrice; // Handle both price and defaultPrice
    return acc + (price / 100) * item.quantity; // Convert price to Rs. and multiply by quantity
  }, 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "45px",
      }}
    >
      <h1
        style={{ fontFamily: "Gabarito", fontWeight: "700", fontSize: "30px" }}
      >
        Cart
      </h1>
      <h3 style={{ fontFamily: "Gabarito", fontWeight: "700" }}></h3>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            gap: "20px",
          }}
        >
          {activeData.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "60px",
                alignItems: "center",
                border: "none",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "10px",
                background: "grey",
                color: "white",
                fontFamily: "Gabarito",
                fontWeight: "700",
              }}
            >
              <h4
                style={{
                  fontFamily: "Gabarito",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                {item.name}
              </h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Quantity: {item.quantity}</p>
                <p>Price: Rs. {item.price / 100 || item.defaultPrice / 100}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 style={{ fontFamily: "Gabarito", fontWeight: "300" }}>
        Total Price to be Paid Rs:{totalPrice}
      </h3>
    </div>
  );
};

export default Cart;
