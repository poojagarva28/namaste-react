import { useContext } from "react";
import UserContext from "../../../utils/userContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      About
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default About;
