import Navbar from "../component/Navbar";
import ProtectedPage from "../layouts/ProtectedPage";

const Home = () => {
  return (
    <ProtectedPage>
      <div>
        <Navbar />
      </div>
    </ProtectedPage>
  );
};

export default Home;
