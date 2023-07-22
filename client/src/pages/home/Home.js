import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Games from "../../components/games/Games";


const Home = () => {

  return (
    <div>
        <Navbar/>
        <Games />
        <Footer />
    </div>
  );
};

export default Home;
