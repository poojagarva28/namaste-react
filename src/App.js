import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import "./assets/css/index.css";
import About from "./components/About/About";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import RestaurantMenuShimmer from "./components/Shimmer/RestaurantMenuShimmer";
const Instamart = lazy(() => import("./components/InstaMart/InstaMart"));

const App = () => {
  const online = useOnline();
  const [user, setUser] = useState({
    name: "pooja",
    email: "pooja@gmail.com",
  });

  return (
    <>
      {online ? (
        <>
          <UserContext.Provider
            value={{
              user: user,
              setUser: setUser,
            }}
          >
            <Header />
            <Outlet />
          </UserContext.Provider>
          <Footer />
        </>
      ) : (
        <h1 className="offline-message">
          Please check your internet connection.
        </h1>
      )}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/instamart",
        element: (
          <div className="restaurantmenu-container">
            <div className="restaurant-list">
              {/* <Suspense fallback={<RestaurantMenuShimmer />}> */}
              <Instamart />
              {/* </Suspense> */}
            </div>
          </div>
        ),
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(App);
