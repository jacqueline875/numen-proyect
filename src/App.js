import React from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Cards/>
      <Carousel/>           
      <Footer/>
    </div>
  );
};

export default App;
