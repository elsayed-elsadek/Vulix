import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ProtectedPage from "../layouts/ProtectedPage";
import VulixCard from "../component/Card/VulixCard";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center  h-screen"><VulixCard/></div>
    </>
  );
};

export default Home;
