import { useParams } from "react-router-dom";
import { IMG_URL } from "../../constants";
import VegIcon from "../../assets/img/veg.png";
import NonVegIcon from "../../assets/img/nonveg.png";
import useRestaurantMenuItem from "../../../utils/useRestaurantMenuItem";
import RestaurantMenuShimmer from "../Shimmer/RestaurantMenuShimmer";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantMenu = useRestaurantMenuItem(id);

  return (
    <div className="restaurantmenu-container">
      {restaurantMenu === null ? (
        <RestaurantMenuShimmer />
      ) : (
        <>
          <div>
            <RestaurantInfo />
          </div>
          {restaurantMenu?.map((restaurantItem) => (
            <div key={restaurantItem?.id} className="restaurantmenu">
              <div className="restaurantmenu-item-description">
                <h3>
                  {restaurantItem?.name}
                  {restaurantItem?.itemAttribute?.vegClassifier === "VEG" ? (
                    <img
                      src={VegIcon}
                      alt="veg"
                      className="vegclassifiericon"
                    />
                  ) : (
                    <img
                      src={NonVegIcon}
                      alt="nonveg"
                      className="vegclassifiericon"
                    />
                  )}
                </h3>
                <p>{restaurantItem?.description}</p>
                <p className="price">&#8377; {restaurantItem?.price / 100}</p>
              </div>
              {restaurantItem?.imageId ? (
                <img
                  src={`${IMG_URL}${restaurantItem?.imageId}`}
                  alt="Menu Image"
                />
              ) : (
                <div className="imagenotavailable">
                  <p>Image not available</p>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
