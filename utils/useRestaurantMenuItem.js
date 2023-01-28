import { useEffect, useState } from "react";

const useRestaurantMenuItem = (id) => {
  const [restaurantMenu, setrestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=${id}`
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards,
    //   "item"
    // );
    setrestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
        (item) => item?.card?.info
      )
    );
  };

  return restaurantMenu;
};

export default useRestaurantMenuItem;
