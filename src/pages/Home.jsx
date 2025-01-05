import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ProtectedPage from "../layouts/ProtectedPage";

const Home = () => {
  return (
    <>
      <div>
        <Link to={'/login'}>login</Link>
      </div>
    </>
  );
};

export default Home;
