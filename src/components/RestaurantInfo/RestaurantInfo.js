import { useParams } from "react-router-dom";
import { IMG_URL } from "../../constants";
import useRestaurant from "../../../utils/useRestaurant";
import { Clock, MapPin, Percent, Star } from "react-feather";

const RestaurantInfo = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  return (
    <>
      {console.log(restaurant, "restaurantMenu")}
      <div className="restaurant-details">
        <img src={IMG_URL + restaurant?.cloudinaryImageId} />
        <div className="restaurant-name">
          <h2>{restaurant?.name}</h2>
          <h4>
            <MapPin />
            {restaurant?.areaName.toLowerCase()},{" "}
            {restaurant?.city.toLowerCase()}
          </h4>
          <div className="other-info">
            <h4>
              <Star />
              {restaurant?.avgRating.toFixed(1)} Stars
              <span>{restaurant?.totalRatingsString}</span>
            </h4>
            <h4>
              <Clock />
              {restaurant?.sla?.slaString.toLowerCase()}
              <span>Delivery Time</span>
            </h4>
            <h4>
              <Percent />
              Offers
              <span>
                {restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta},{" "}
                {restaurant?.aggregatedDiscountInfo?.descriptionList[1]?.meta}
              </span>
            </h4>
          </div>
          <div className="availability">
            <h3>{restaurant?.availability?.opened ? "OPEN" : "CLOSED"}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
