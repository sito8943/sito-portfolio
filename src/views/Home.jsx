// sito components
import SitoContainer from "sito-container";

// own components
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <SitoContainer sx={{ width: "100vw" }}>
      <Navbar />
    </SitoContainer>
  );
};

export default Home;
