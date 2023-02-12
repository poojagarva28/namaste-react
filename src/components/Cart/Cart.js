import { useSelector } from "react-redux";

const Contact = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cart">
      cart items:{cartItems.length}
      {cartItems.map((item) => (
        <h4>{item.name}</h4>
      ))}
    </div>
  );
};

export default Contact;
