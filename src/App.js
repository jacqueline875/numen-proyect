import React from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Redes from "./components/Redes";
import Carrito from "./components/Carrito";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import BannerPrincipal from "./components/BannerPrincipal";
import { cardsList } from "./data"; 
import Swal from 'sweetalert2'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Carrito/> 
      <BannerPrincipal/>       
      <Cards list={cardsList}/> 
      <Banner/>      
      <Carousel/> 
      <Redes/>        
      <Footer/> 
    </div>
  );
};

export default App;
