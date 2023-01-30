import Logo from "../Logo/Logo";
import { LogOut, Settings, ShoppingCart, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../../utils/userContext";

const Header = () => {
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <div className="profilesection">
        {isLoggedIn ? (
          <div>
            <ShoppingCart />
            &nbsp;
            <User onClick={() => setShowUserOptions(!showUserOptions)} />
            {showUserOptions && (
              <div className="usersettings">
                <ul>
                  <li>
                    Settings
                    <Settings />
                  </li>
                  <li
                    onClick={() => {
                      setIsLoggedIn(false);
                      setShowUserOptions(false);
                      navigate("/");
                    }}
                  >
                    Logout
                    <LogOut />
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button
              className="header-button"
              onClick={() => {
                setIsLoggedIn(true);
                navigate("/login");
              }}
            >
              login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
