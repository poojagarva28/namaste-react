import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setrestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=${id}`
    );
    const json = await data.json();
    console.log(json?.data);
    setrestaurant(json?.data?.cards[0]?.card?.card?.info);
  };

  return restaurant;
};

export default useRestaurant;
