import { useRouteError } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Header />
      <div className="errorpage">
        <h1>{error.status}</h1>
        <h4>{error.statusText}</h4>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
