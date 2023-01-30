import { useContext } from "react";
import UserContext from "../../../utils/userContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <h4>Made with 💙 By Pooja :))</h4>
    </footer>
  );
};

export default Footer;
