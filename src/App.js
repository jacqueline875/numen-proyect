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


const App = () => {
  return (
    // <div className="bg-gradient-to-br from-indigo-300 to-indigo-500">
    <div className="bg-gray-900">
      <NavBar/>
      <Carrito/> 
      <BannerPrincipal/> 
      <p className="text-center mt-10 text-3xl font-bold text-silver">Productos </p>      
      <Cards list={cardsList}/> 
      <p className="text-center mt-10 text-3xl font-bold text-silver">Ultimas Ofertas </p>  
      <Banner/>      
      <Carousel/> 
      <p className="text-center mt-10 text-3xl font-bold text-silver">Seguinos en </p> 
      <Redes/>        
      <Footer/> 
    </div>
  );
};

export default App;
