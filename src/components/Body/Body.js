import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { RestaurantData } from "../../constants";
import { Search } from "react-feather";
import { useEffect, useState, useContext } from "react";
import Shimmer from "../Shimmer/Shimmer";
import UserContext from "../../../utils/userContext";

const Body = () => {
  const [searchItem, setSearchItem] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [fiteredRestaurant, setFiteredRestaurant] = useState([]);

  const { user, setUser } = useContext(UserContext);
  // console.log("user", user);
  console.log("userContext", user, setUser);

  const filterRestaurant = (searchItem, restaurantList) => {
    // console.log(searchItem);
    // console.log(restaurantList);
    const filteredData = restaurantList.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    // console.log(filteredData);
    setFiteredRestaurant(filteredData);
    return filteredData;
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFiteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <section>
      <div style={{ textAlign: "center" }}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <input
          type="text"
          value={user.name}
          placeholder="name"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button onClick={() => filterRestaurant(searchItem, restaurantList)}>
          <Search />
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.length === 0 ? (
          <Shimmer />
        ) : (
          fiteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))
        )}
      </div>
    </section>
  );
};

export default Body;
