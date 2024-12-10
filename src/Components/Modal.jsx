const styles = {
  modal: {
    position: "fixed",
    top: "95%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "green",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "80%",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "500px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  modalButton: {
    padding: "10px 20px",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontFamily: "Gabarito",
  },
  addButton: {
    color: "green",
    borderRadius: "15px",
    padding: "5px",
    width: "100px",
    height: "50px",
    fontSize: "30px",
    fontFamily: "Gabarito",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  },
};

const Modal = ({
  item,
  quantity,
  onConfirm,
  onClose,
  Close,
  cart,
  navigate,
  handleAddClick,
}) => {
  if (!item) return null; // Safeguard against undefined item

  // Calculate total quantity using useMemo to optimize performance
  // const totalQuantity = useMemo(() => {
  //   return Object.values(quantity).reduce((acc, curr) => acc + curr, 1);
  // }, [quantity]);
  const [totalQuantity] = useAtom(totalQuantityAtom);

  const cartBoi = () => {
    if (cart) {
      navigate("/cart", { state: { cart, totalQuantity } });
      console.log(cart, "items");
    } else {
      alert(cart);
    }
  };
  return (
    <>
      <div style={styles.modal}>
        <h3 style={{ fontFamily: "Gabarito", paddingBottom: "50px" }}>
          {totalQuantity} item added
        </h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{ fontFamily: "Gabarito", cursor: "pointer" }}
            onClick={cartBoi} // Trigger onConfirm when clicked
          >
            View Your Cart
          </h2>
          <h3
            style={{
              padding: "5px",
              border: "none",
              borderRadius: "20px",
              fontFamily: "Gabarito",
              paddingBottom: "20px",
              cursor: "pointer",
            }}
            onClick={Close} // Trigger Close when clicked
          >
            Cancel
          </h3>
        </div>
      </div>
    </>
  );
};
