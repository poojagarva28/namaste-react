import { Link } from "react-router-dom";

const RestaurantCard = ({ id, name, cuisines, address, cloudinaryImageId }) => {
  //   console.log(name, cuisines, address, cloudinaryImageId);
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="restaurant-card">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>{address}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
