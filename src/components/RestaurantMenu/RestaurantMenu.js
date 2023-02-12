import { useParams } from "react-router-dom";
import { IMG_URL } from "../../constants";
import VegIcon from "../../assets/img/veg.png";
import NonVegIcon from "../../assets/img/nonveg.png";
import useRestaurantMenuItem from "../../../utils/useRestaurantMenuItem";
import RestaurantMenuShimmer from "../Shimmer/RestaurantMenuShimmer";
import RestaurantInfo from "../RestaurantInfo/RestaurantInfo";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../utils/slices/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantMenu = useRestaurantMenuItem(id);

  const dispatch = useDispatch();

  const addToCartHandler = (restaurantItem) => {
    console.log(restaurantItem, "item");
    dispatch(addToCart(restaurantItem));
  };

  return (
    <div className="restaurantmenu-container">
      {restaurantMenu === null ? (
        <RestaurantMenuShimmer />
      ) : (
        <>
          <div>
            <RestaurantInfo />
          </div>
          <div className="restaurantitem-container">
            <div>
              {restaurantMenu?.map((restaurantItem) => (
                <div key={restaurantItem?.id} className="restaurantmenu">
                  <div className="restaurantmenu-item-description">
                    <h3>
                      {restaurantItem?.name}
                      {restaurantItem?.itemAttribute?.vegClassifier ===
                      "VEG" ? (
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
                    <p className="price">
                      &#8377; {restaurantItem?.price / 100}
                    </p>
                  </div>
                  <div>
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
                    <div className="addtocart-btn">
                      <button onClick={() => addToCartHandler(restaurantItem)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Cart />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
