import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Redes from "./components/Redes";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import Mapa from "./components/Mapa";
import BannerPrincipal from "./components/BannerPrincipal";
import { products } from "./data"; 


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x=>x.id === product.id);
    if (exist){
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty:exist.qty + 1} : x ));
    } 
    else {
      setCartItems([...cartItems,{...product, qty:1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty ===1){
        setCartItems(cartItems.filter((x)=> x.id !== product.id));
    }
    else {
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty:exist.qty - 1} : x ));
    }
  }
  return (   
    <div className="bg-gray-900">
      <NavBar  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>        
      <BannerPrincipal/> 
      <Banner products={products}/>       
      <Cards onAdd={onAdd} products={products}/>           
      <Carousel/>    
      <Redes/>        
      <Mapa/>
      <Footer/> 
    </div>
  );
};

export default App;
