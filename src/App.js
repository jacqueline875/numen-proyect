import React from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Redes from "./components/Redes";
import Carrito from "./components/Carrito";
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
      <Redes/>
      <Carrito/>
    </div>
  );
};

export default App;
//prueba